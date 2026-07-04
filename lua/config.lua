-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "SpiderManMovies",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://imdb.iamidiotareyoutoo.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["justwatch"] = {},
        ["media"] = {},
        ["photo"] = {},
        ["search"] = {},
      },
    },
    entity = {
      ["justwatch"] = {
        ["fields"] = {},
        ["name"] = "justwatch",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "l",
                      ["orig"] = "l",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = true,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/justwatch",
                ["parts"] = {
                  "justwatch",
                },
                ["select"] = {
                  ["exist"] = {
                    "l",
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["media"] = {
        ["fields"] = {},
        ["name"] = "media",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/media/{id}",
                ["parts"] = {
                  "media",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["photo"] = {
        ["fields"] = {},
        ["name"] = "photo",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "h",
                      ["orig"] = "h",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "w",
                      ["orig"] = "w",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/photo/{id}",
                ["parts"] = {
                  "photo",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "h",
                    "id",
                    "w",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {},
        ["name"] = "search",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "lsn",
                      ["orig"] = "lsn",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "tt",
                      ["orig"] = "tt",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "v",
                      ["orig"] = "v",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/search",
                ["parts"] = {
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
                    "lsn",
                    "q",
                    "tt",
                    "v",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
