var google = require('./google')
var routes = require('express').Router();

routes.get('/', (req, res)=> {
  res.json({
    message: 'root of auth'
  })
})

routes.use('/google', google)


module.exports = routes
