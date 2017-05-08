var routes = require('express').Router();
var auth = require('./authentication')


routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Server Roots'
  })
})

routes.use('/auth', auth)

module.exports = routes;
