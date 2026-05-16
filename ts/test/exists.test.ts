
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SpiderManMoviesSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SpiderManMoviesSDK.test()
    equal(null !== testsdk, true)
  })

})
