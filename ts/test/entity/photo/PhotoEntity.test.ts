

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


describe('PhotoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SPIDER_MAN_MOVIES_TEST_LIVE=TRUE.
  afterEach(liveDelay('SPIDER_MAN_MOVIES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SpiderManMoviesSDK.test()
    const ent = testsdk.Photo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SPIDER_MAN_MOVIES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'photo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"photo","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /photo/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"h","or":"h","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"w","or":"w","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/photo/{id}","q":{"exist":["h","id","w"]},"r":{},"s":[{"lit":"photo"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"photo","name__orig":"photo","Name":"Photo","name_":"photo","name-":"photo","NAME":"PHOTO","index$":2}, {"active":true,"entity":"photo","key$":"BasicPhotoFlow","kind":"basic","name":"BasicPhotoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"photo_ref01","srcdatavar":"photo_ref01_data","suffix":"_dt0"},"m":{"id":"photo01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-photo_ref01"}}],"index$":0}]}, 'Photo', {"GET /photo/{id}":{"protocol":"http","responses":{"200":{"description":"successful operation"},"400":{"description":"invalid parameters"},"500":{"description":"internal server error"}},"produces":["image/jpeg"],"parameters":[{"in":"path","name":"id","description":"IMDb ID of the title to get the poster photo","required":true,"type":"string","index$":0},{"in":"query","name":"w","description":"Width of the photo","required":false,"type":"number","index$":1},{"in":"query","name":"h","description":"Height of the photo","required":false,"type":"number","index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let photo_ref01_data = Object.values(setup.data.existing.photo)[0] as any

    // LOAD
    const photo_ref01_ent = client.Photo()
    const photo_ref01_match_dt0: any = {}
    photo_ref01_match_dt0.id = photo_ref01_data.id
    const photo_ref01_data_dt0 = (await photo_ref01_ent.load(photo_ref01_match_dt0)).data()
    assert(photo_ref01_data_dt0.id === photo_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/photo/PhotoTestData.json')

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
    ['photo01','photo02','photo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SPIDER_MAN_MOVIES_TEST_PHOTO_ENTID': idmap,
    'SPIDER_MAN_MOVIES_TEST_LIVE': 'FALSE',
    'SPIDER_MAN_MOVIES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SPIDER_MAN_MOVIES_TEST_PHOTO_ENTID']

  const live = 'TRUE' === env.SPIDER_MAN_MOVIES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SPIDER_MAN_MOVIES_TEST_PHOTO_ENTID']
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
  
