package = "voxgig-sdk-spider-man-movies"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/spider-man-movies-sdk.git"
}
description = {
  summary = "SpiderManMovies SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
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
