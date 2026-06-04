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
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "l",
                      "orig": "l",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": True,
                      "type": "`$ANY`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "h",
                      "orig": "h",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "w",
                      "orig": "w",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "lsn",
                      "orig": "lsn",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "tt",
                      "orig": "tt",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "v",
                      "orig": "v",
                      "reqd": False,
                      "type": "`$ANY`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
