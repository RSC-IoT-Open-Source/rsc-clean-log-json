# RSC NodeJS JSON Logging Library
Simple logging library to reduce initialization and options.
But rather to just `console.log` in a standard JSON format

## Usage
```js
const log = require('rsc-clean-log-json')

log.info(`Event saved`) 
// { "level": "info", "msg": "Event saved" }

log.error(`Error saving`, new Error(`database-offline`)) 
// { "level": "error", "msg": "Event saving", "errorMsg": "database-offline" }

log.warn(`Not too serious`, { userId: 1, name: 'John Doe'} )
// { "level": "error", "msg": "Not too serious", "userId": 1, "name": "John Doe" }
```

## Methods
- `log.debug()`
- `log.info()`
- `log.wanr()`
- `log.error()`
- `log.alert()`
