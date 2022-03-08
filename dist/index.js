
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bridgesdk.cjs.production.min.js')
} else {
  module.exports = require('./bridgesdk.cjs.development.js')
}
