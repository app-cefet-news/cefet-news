const path = require('path')

//module.exports = path.dirname(process.mainModule.filename) // DEPRECATED
module.exports = path.dirname(require.main.filename)