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
    this.format(`warning`, message, meta).write()
  },

  alert(message, meta) {
    this.format(`alert`, message, meta).write()
  },

  format(level, msg, meta) {
    if(typeof msg !== 'string') msg = JSON.stringify(msg)

    if(meta instanceof Error) meta = { errorMsg: meta.message }
    else if (typeof meta === 'string') meta = { meta }

    this.logLine = JSON.stringify({
      level,
      msg,
      ...meta
    })

    return this
  },

  write() {
    console.log(this.logLine)
  }
}
