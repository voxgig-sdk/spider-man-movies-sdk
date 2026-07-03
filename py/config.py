# SpiderManMovies SDK configuration


def make_config():
    return {
        "main": {
            "name": "SpiderManMovies",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://imdb.iamidiotareyoutoo.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "justwatch": {},
                "media": {},
                "photo": {},
                "search": {},
            },
        },
        "entity": {
      "justwatch": {
        "fields": [],
        "name": "justwatch",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "l",
                      "orig": "l",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/justwatch",
                "parts": [
                  "justwatch",
                ],
                "select": {
                  "exist": [
                    "l",
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "media": {
        "fields": [],
        "name": "media",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/media/{id}",
                "parts": [
                  "media",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "photo": {
        "fields": [],
        "name": "photo",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "h",
                      "orig": "h",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "w",
                      "orig": "w",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/photo/{id}",
                "parts": [
                  "photo",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "h",
                    "id",
                    "w",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [],
        "name": "search",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "lsn",
                      "orig": "lsn",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "tt",
                      "orig": "tt",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "v",
                      "orig": "v",
                      "reqd": False,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/search",
                "parts": [
                  "search",
                ],
                "select": {
                  "exist": [
                    "lsn",
                    "q",
                    "tt",
                    "v",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
