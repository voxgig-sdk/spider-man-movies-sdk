import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "justwatch",
    "accessor": "Justwatch",
    "op": "load",
    "method": "GET",
    "path": "/justwatch",
    "args": [],
    "select": {
      "l": "v1",
      "q": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "L"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "media",
    "accessor": "Media",
    "op": "load",
    "method": "GET",
    "path": "/media/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "photo",
    "accessor": "Photo",
    "op": "load",
    "method": "GET",
    "path": "/photo/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "h": "v1",
      "w": "v1"
    },
    "headers": [],
    "query": [
      "w",
      "h"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "load",
    "method": "GET",
    "path": "/search",
    "args": [],
    "select": {
      "lsn": "v1",
      "q": "v1",
      "tt": "v1",
      "v": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "tt",
      "lsn",
      "v"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
