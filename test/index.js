const assert = require('assert')
const { describe, it } = require('mocha')
const sinon = require('sinon')

const logger = require('../index')

describe('rsc-clean-log-json', function () {
  it('should export an object', function () {
    assert.strictEqual(typeof logger, 'object')
  })

  describe('format', function () {
    it('should set logLine', function () {
      let output = JSON.stringify({
        level: 'test',
        msg: 'my-message'
      })
      let format = logger.format(`test`, `my-message`)
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should set error message in logLine', function () {
      let output = JSON.stringify({
        level: 'test',
        msg: 'my-message',
        errorMsg: 'my-error-message'
      })
      let format = logger.format(`test`, `my-message`, new Error(`my-error-message`))
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should set logLine with meta string', function () {
      let output = JSON.stringify({
        level: 'test',
        msg: 'my-message',
        meta: 'my-meta-data'
      })
      let format = logger.format(`test`, `my-message`, `my-meta-data`)
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should set logLine with meta object', function () {
      let output = JSON.stringify({
        level: 'test',
        msg: 'my-message',
        name: 'james-smith'
      })
      let format = logger.format(`test`, `my-message`, { name: `james-smith` })
      assert.deepStrictEqual(format.logLine, output)
    })
  })

  describe('write', function () {
    it.skip('should write to console.log', function() {
      // need tests here
    })
  })

})