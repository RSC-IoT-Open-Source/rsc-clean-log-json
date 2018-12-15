module.exports = {

  debug(message, attributes) {
    this.format(`debug`, message, attributes).write()
  },

  info(message, attributes) {
    this.format(`info`, message, attributes).write()
  },

  warn(message, attributes) {
    this.format(`warning`, message, attributes).write()
  },

  error(message, attributes) {
    this.format(`error`, message, attributes).write()
  },

  alert(message, attributes) {
    this.format(`alert`, message, attributes).write()
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
