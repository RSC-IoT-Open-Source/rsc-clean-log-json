# RSC NodeJS JSON Logging Library

[![Build Status](https://travis-ci.org/jveldboom/rsc-clean-log-json.svg?branch=master)](https://travis-ci.org/jveldboom/rsc-clean-log-json)
[![Coverage Status](https://coveralls.io/repos/github/jveldboom/rsc-clean-log-json/badge.svg)](https://coveralls.io/github/jveldboom/rsc-clean-log-json)

Simple logging library to reduce initialization and config options.
Basically just a wrapper around `console.log` in a standard JSON output format.

## Installation
```
npm i rsc-clean-log-json
```

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
