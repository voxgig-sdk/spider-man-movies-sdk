
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://imdb.iamidiotareyoutoo.com',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      justwatch: {
      },

      media: {
      },

      photo: {
      },

      search: {
      },

    }
  }


  entity = {
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
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": true,
                    "type": "`$ANY`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/justwatch",
              "parts": [
                "justwatch"
              ],
              "select": {
                "exist": [
                  "l",
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/media/{id}",
              "parts": [
                "media",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "h",
                    "orig": "h",
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "w",
                    "orig": "w",
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/photo/{id}",
              "parts": [
                "photo",
                "{id}"
              ],
              "select": {
                "exist": [
                  "h",
                  "id",
                  "w"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "tt",
                    "orig": "tt",
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "v",
                    "orig": "v",
                    "reqd": false,
                    "type": "`$ANY`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/search",
              "parts": [
                "search"
              ],
              "select": {
                "exist": [
                  "lsn",
                  "q",
                  "tt",
                  "v"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

