# RSC NodeJS JSON Logging Library
Simple logging library to reduce initialization and options.
But rather to just `console.log` in a standard JSON format

## Usage
```js
const log = require('rsc-clean-log-json')

log.info(`Event saved`) 
// { "level": "info", "message": "Event saved" }

log.error(`Error saving`, new Error(`database-offline`)) 
/*
{
  "level": "error", 
  "message": "Event saving", 
  "attributes": {
    "error": "database-offline",
    "stack" "<stack trace>"
  }
}
*/

log.warn(`Not too serious`, { userId: 1, name: 'John Doe'} )
/*
{
  "level": "warn", 
  "message": "Not too serious", 
  "attributes": {
    "userId": 1, 
    "name": "John Doe" 
  }
}
*/
```

## Methods
- `log.debug()`
- `log.info()`
- `log.warn()`
- `log.error()`
- `log.alert()`
