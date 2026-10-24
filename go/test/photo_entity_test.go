package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/spider-man-movies-sdk/go"
	"github.com/voxgig-sdk/spider-man-movies-sdk/go/core"

	vs "github.com/voxgig-sdk/spider-man-movies-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const photoEntityLiveStrict = true


func TestPhotoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Photo(nil)
		if ent == nil {
			t.Fatal("expected non-nil PhotoEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Photo(nil).Load(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.SpiderManMoviesError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := photoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "photo." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, photoEntityLiveStrict, "Live entity test blocked: %s", "the flow loads a photo record it has no list to find")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		photoRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.photo")))
		var photoRef01Data map[string]any
		if len(photoRef01DataRaw) > 0 {
			photoRef01Data = core.ToMapAny(photoRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = photoRef01Data

		// LOAD
		photoRef01Ent := client.Photo(nil)
		photoRef01MatchDt0 := map[string]any{
			"id": photoRef01Data["id"],
		}
		photoRef01DataDt0Loaded, err := photoRef01Ent.Load(photoRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		photoRef01DataDt0LoadResult := core.ToMapAny(entityData(photoRef01DataDt0Loaded))
		if photoRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if photoRef01DataDt0LoadResult["id"] != photoRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func photoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "photo", "PhotoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read photo test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse photo test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"photo01", "photo02", "photo03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("SPIDER_MAN_MOVIES_TEST_PHOTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SPIDER_MAN_MOVIES_TEST_PHOTO_ENTID": idmap,
		"SPIDER_MAN_MOVIES_TEST_LIVE":      "FALSE",
		"SPIDER_MAN_MOVIES_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["SPIDER_MAN_MOVIES_TEST_PHOTO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["SPIDER_MAN_MOVIES_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewSpiderManMoviesSDK(core.ToMapAny(mergedOpts))
	}

	live := env["SPIDER_MAN_MOVIES_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["SPIDER_MAN_MOVIES_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
