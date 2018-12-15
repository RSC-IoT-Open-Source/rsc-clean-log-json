const assert = require('assert')
const { describe, it } = require('mocha')
const sinon = require('sinon')

const logger = require('../index')

describe('rsc-clean-log-json', function () {
  it('should export an object', function () {
    assert.strictEqual(typeof logger, 'object')
  })

  describe('format', function () {
    it('should set level & message', function () {
      let output = JSON.stringify({
        level: 'test',
        message: 'my-message'
      })
      let format = logger.format(`test`, `my-message`)
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should set error message & stack when passed error object', function () {
      let testError = new Error(`test-error-message`)
      let output = JSON.stringify({
        level: 'test',
        message: 'my-message',
        attributes: {
          error: testError.message,
          stack: testError.stack
        }
      })
      let format = logger.format(`test`, `my-message`, testError)
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should remove attributes object if empty object or array', function () {
      let output = JSON.stringify({
        level: 'test',
        message: 'my-message'
      })
      let format = logger.format(`test`, `my-message`, {})
      assert.deepStrictEqual(format.logLine, output)

      format = logger.format(`test`, `my-message`, [])
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should set force attributes to object if string', function () {
      let output = JSON.stringify({
        level: 'test',
        message: 'my-message',
        attributes: { string: `my-string` }
      })
      let format = logger.format(`test`, `my-message`, `my-string`)
      assert.deepStrictEqual(format.logLine, output)
    })

    it('should set logError for an exception', function () {
      let circular = [];
      circular[0] = circular;

      let output = JSON.stringify({
        level: 'test',
        message: 'my-message',
        attributes: {
          logError: `Converting circular structure to JSON`
        }
      })
      let format = logger.format(`test`, `my-message`, circular)
      assert.deepStrictEqual(format.logLine, output)
    })
  })

  describe('write', function () {
    it('should write to console.log', function() {
      logger.format(`test`, `my-message`, {})
      logger.write()
    })
  })

  describe('log levels', function () {
    it('should write debug message', function() {
      logger.debug(`my debug message`)
    })

    it('should write info message', function() {
      logger.info(`my info message`)
    })

    it('should write warn message', function() {
      logger.warn(`my warn message`)
    })

    it('should write error message', function() {
      logger.error(`my error message`)
    })

    it('should write alert message', function() {
      logger.alert(`my alert message`)
    })
  })

})