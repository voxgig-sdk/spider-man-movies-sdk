

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SpiderManMoviesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SPIDER_MAN_MOVIES_TEST_LIVE=TRUE.
  afterEach(liveDelay('SPIDER_MAN_MOVIES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SpiderManMoviesSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SPIDER_MAN_MOVIES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"search","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /search","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"lsn","or":"lsn","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"tt","or":"tt","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"v","or":"v","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/search","q":{"exist":["lsn","q","tt","v"]},"r":{},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":3}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"search_ref01","srcdatavar":"search_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-search_ref01"}}],"index$":0}]}, 'Search', {"GET /search":{"protocol":"http","responses":{"200":{"description":"successful operation"},"400":{"description":"invalid parameters"},"500":{"description":"internal server error"}},"consumes":["application/x-www-form-urlencoded"],"produces":["application/json"],"parameters":[{"in":"query","name":"q","description":"Enter a word or phrase to search on (Search Query)","required":false,"type":"string","index$":0},{"in":"query","name":"tt","description":"Enter IMDb ID to display only one detailed result (Get more details of a particular IMDb ID)","required":false,"type":"string","index$":1},{"in":"query","name":"lsn","description":"if IMDb ID is a series, provide a Season Number to fetch episodes of that (Season Number)","required":false,"type":"integer","index$":2},{"in":"query","name":"v","description":"API version (reserved for future use)","required":false,"type":"integer","default":1,"index$":3}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LOAD
    const search_ref01_ent = client.Search()
    const search_ref01_match_dt0: any = {}
    const search_ref01_data_dt0 = (await search_ref01_ent.load(search_ref01_match_dt0)).data()
    assert(null != search_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SpiderManMoviesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SPIDER_MAN_MOVIES_TEST_SEARCH_ENTID': idmap,
    'SPIDER_MAN_MOVIES_TEST_LIVE': 'FALSE',
    'SPIDER_MAN_MOVIES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SPIDER_MAN_MOVIES_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.SPIDER_MAN_MOVIES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SPIDER_MAN_MOVIES_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SpiderManMoviesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SPIDER_MAN_MOVIES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
