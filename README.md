# SpiderManMovies SDK

Search movie, TV, and Spider-Man title data through a community-maintained Free Movie DB endpoint

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Free Movie DB - The Free Movie Database API

[Free Movie DB (FM-DB)](https://imdb.iamidiotareyoutoo.com) is a community-maintained RESTful service that exposes movie and television metadata, including the Spider-Man movie catalogue used by the [freepublicapis.com listing](https://freepublicapis.com/spider-man-movies-api). The project describes itself as the "Free Movie Database API" and states that no API keys or web-scraping techniques are required to access responses.

What you get from the API:
- Title search (e.g. `GET /search?q=Spiderman`) returning movies, shows, and related media records.
- Media metadata such as titles, release years, and cast/actor details.
- Photo / image references attached to title records.
- JustWatch-style streaming availability information surfaced alongside title data.

Operational notes: the API is open and unauthenticated, and the freepublicapis.com listing reports **CORS is disabled** for the public endpoint. No official rate limits are published; the project is donation-supported and tracks issues via GitHub.

## Try it

**TypeScript**
```bash
npm install spider-man-movies
```

**Python**
```bash
pip install spider-man-movies-sdk
```

**PHP**
```bash
composer require voxgig/spider-man-movies-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/spider-man-movies-sdk/go
```

**Ruby**
```bash
gem install spider-man-movies-sdk
```

**Lua**
```bash
luarocks install spider-man-movies-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { SpiderManMoviesSDK } from 'spider-man-movies'

const client = new SpiderManMoviesSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o spider-man-movies-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "spider-man-movies": {
      "command": "/abs/path/to/spider-man-movies-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Justwatch** | Streaming-availability information (in the style of JustWatch) returned alongside title records. | `/justwatch` |
| **Media** | Movie and TV title records — fields such as title, release year, and cast/actor details. | `/media/{id}` |
| **Photo** | Image / poster references associated with a media title. | `/photo/{id}` |
| **Search** | Title lookup endpoint, e.g. `GET /search?q=<query>`, used to find movies and shows by name. | `/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from spidermanmovies_sdk import SpiderManMoviesSDK

client = SpiderManMoviesSDK({})


# Load a specific justwatch
justwatch, err = client.Justwatch(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'spidermanmovies_sdk.php';

$client = new SpiderManMoviesSDK([]);


// Load a specific justwatch
[$justwatch, $err] = $client->Justwatch(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/spider-man-movies-sdk/go"

client := sdk.NewSpiderManMoviesSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "SpiderManMovies_sdk"

client = SpiderManMoviesSDK.new({})


# Load a specific justwatch
justwatch, err = client.Justwatch(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("spider-man-movies_sdk")

local client = sdk.new({})


-- Load a specific justwatch
local justwatch, err = client:Justwatch(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = SpiderManMoviesSDK.test()
const result = await client.Justwatch().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = SpiderManMoviesSDK.test(None, None)
result, err = client.Justwatch(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = SpiderManMoviesSDK::test(null, null);
[$result, $err] = $client->Justwatch(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Justwatch(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SpiderManMoviesSDK.test(nil, nil)
result, err = client.Justwatch(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Justwatch(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Free Movie DB - The Free Movie Database API

- Upstream: [https://imdb.iamidiotareyoutoo.com](https://imdb.iamidiotareyoutoo.com)
- API docs: [https://imdb.iamidiotareyoutoo.com/docs/index.html](https://imdb.iamidiotareyoutoo.com/docs/index.html)

- Released under the **GNU Affero General Public License 3.0 (AGPL-3.0)**.
- Network-deployed derivative works must also offer their source under AGPL-3.0.
- The project explicitly states it is **not endorsed by or affiliated with IMDb.com**.
- Content and images are contributed and maintained by users; verify any reuse against AGPL terms.

---

Generated from the Free Movie DB - The Free Movie Database API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
