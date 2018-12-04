module.exports = {

  debug(message, meta) {
    this.format(`debug`, message, meta).write()
  },

  info(message, meta) {
    this.format(`info`, message, meta).write()
  },

  warn(message, meta) {
    this.format(`warning`, message, meta).write()
  },

  error(message, meta) {
    this.format(`error`, message, meta).write()
  },

  alert(message, meta) {
    this.format(`alert`, message, meta).write()
  },

  format(level, message, attributes) {

    try {

      if (attributes instanceof Error) {
        attributes = {
          error: attributes.message,
          stack: attributes.stack
        }
      }
      // remove empty object
      else if (attributes && !Object.keys(attributes).length) {
        attributes = undefined
      }
      // force attributes to be object
      else if (typeof attributes === 'string') {
        attributes = { string: attributes }
      }

      this.logLine = JSON.stringify({
        level: String(level),
        message: String(message),
        attributes
      })

    } catch (err) {

      // catch circular reference and other exception
      attributes = { logError: err.message }
      this.logLine = JSON.stringify({
        level,
        message,
        attributes
      })
    }

    return this
  },

  write() {
    console.log('%s', this.logLine)
  }
}
