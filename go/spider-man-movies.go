package voxgigspidermanmoviessdk

import (
	"github.com/voxgig-sdk/spider-man-movies-sdk/core"
	"github.com/voxgig-sdk/spider-man-movies-sdk/entity"
	"github.com/voxgig-sdk/spider-man-movies-sdk/feature"
	_ "github.com/voxgig-sdk/spider-man-movies-sdk/utility"
)

// Type aliases preserve external API.
type SpiderManMoviesSDK = core.SpiderManMoviesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SpiderManMoviesEntity = core.SpiderManMoviesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SpiderManMoviesError = core.SpiderManMoviesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJustwatchEntityFunc = func(client *core.SpiderManMoviesSDK, entopts map[string]any) core.SpiderManMoviesEntity {
		return entity.NewJustwatchEntity(client, entopts)
	}
	core.NewMediaEntityFunc = func(client *core.SpiderManMoviesSDK, entopts map[string]any) core.SpiderManMoviesEntity {
		return entity.NewMediaEntity(client, entopts)
	}
	core.NewPhotoEntityFunc = func(client *core.SpiderManMoviesSDK, entopts map[string]any) core.SpiderManMoviesEntity {
		return entity.NewPhotoEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.SpiderManMoviesSDK, entopts map[string]any) core.SpiderManMoviesEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSpiderManMoviesSDK = core.NewSpiderManMoviesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
