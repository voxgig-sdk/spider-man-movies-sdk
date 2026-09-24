

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


describe('MediaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SPIDER_MAN_MOVIES_TEST_LIVE=TRUE.
  afterEach(liveDelay('SPIDER_MAN_MOVIES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SpiderManMoviesSDK.test()
    const ent = testsdk.Media()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SPIDER_MAN_MOVIES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'media.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"media","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /media/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/media/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"media"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"media","name__orig":"media","Name":"Media","name_":"media","name-":"media","NAME":"MEDIA","index$":1}, {"active":true,"entity":"media","key$":"BasicMediaFlow","kind":"basic","name":"BasicMediaFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"media_ref01","srcdatavar":"media_ref01_data","suffix":"_dt0"},"m":{"id":"media01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-media_ref01"}}],"index$":0}]}, 'Media', {"GET /media/{id}":{"protocol":"http","responses":{"200":{"description":"successful operation"},"400":{"description":"invalid parameters"},"500":{"description":"internal server error"}},"produces":["video/mp4","image/jpeg"],"parameters":[{"in":"path","name":"id","description":"IMDb ID of the title to get the trailer video","required":true,"type":"string","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let media_ref01_data = Object.values(setup.data.existing.media)[0] as any

    // LOAD
    const media_ref01_ent = client.Media()
    const media_ref01_match_dt0: any = {}
    media_ref01_match_dt0.id = media_ref01_data.id
    const media_ref01_data_dt0 = (await media_ref01_ent.load(media_ref01_match_dt0)).data()
    assert(media_ref01_data_dt0.id === media_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/media/MediaTestData.json')

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
    ['media01','media02','media03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SPIDER_MAN_MOVIES_TEST_MEDIA_ENTID': idmap,
    'SPIDER_MAN_MOVIES_TEST_LIVE': 'FALSE',
    'SPIDER_MAN_MOVIES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SPIDER_MAN_MOVIES_TEST_MEDIA_ENTID']

  const live = 'TRUE' === env.SPIDER_MAN_MOVIES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SPIDER_MAN_MOVIES_TEST_MEDIA_ENTID']
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
  
