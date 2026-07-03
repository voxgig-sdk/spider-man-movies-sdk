package = "voxgig-sdk-spider-man-movies"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/spider-man-movies-sdk.git",
  tag = "lua/v0.0.1",
  dir = "spider-man-movies-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Free Movie DB - The Free Movie Database public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/spider-man-movies-sdk",
  issues_url = "https://github.com/voxgig-sdk/spider-man-movies-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "spider-man-movies" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["spider-man-movies_sdk"] = "spider-man-movies_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
