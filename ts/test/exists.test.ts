
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SpiderManMoviesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SpiderManMoviesSDK.test()
    equal(testsdk instanceof SpiderManMoviesSDK, true,
      'SpiderManMoviesSDK.test() must return a client synchronously')
  })

})
