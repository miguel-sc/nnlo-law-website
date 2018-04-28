var express = require('express')
var router = express.Router()
var path = require('path')
var glob = require('glob')

router.get('/', function(req, res, next) {
  const publicdir = path.join(process.cwd(), 'public')
  glob('plots/**/*.png', {cwd: publicdir}, (er, files) => {
    console.log(files)
    res.json({'names': files})
  })
})

module.exports = router
