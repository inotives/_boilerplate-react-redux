var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var plus = google.plus('v1');
var config = require('../config');
const routes = require('express').Router();

// create a new oauth object
function getOAuthClient(){
  return new OAuth2(config.auth.google.clientId, config.auth.google.clientSecret, config.auth.google.callbackUrl)
}

// create url to be hit for authentication
function getAuthUrl() {
  var oauth2Client = getOAuthClient();
  console.log('reach here !!')
  var scopes = [
    'email',
    'https://www.googleapis.com/auth/plus.me'
  ]

  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  })

  return url;
}


routes.get('/', (req, res) => {
  res.json({
    message: 'root of google auth'
  })
})

routes.get('/init', (req, res) => {
  var url = getAuthUrl();
  console.log('here?')
  res.json({
    googleAuthLink: url
  })
})

routes.use("/oauth2_callback", (req, res, next) => {
  var oauth2Client = getOAuthClient();
  var code = req.query.code // the query param code
  oauth2Client.getToken(code, function(err, tokens){
    // tokens contains access_token and optional refresh tokens, save them
    if(!err){
      oauth2Client.setCredentials(tokens);
      var p = new Promise( (resolve, reject) => {
        plus.people.get({userId: 'me', auth: oauth2Client}, (err, response) => {
          resolve(response || err);
        })
      }).then( (data) => {
        res.json({
          data: data
        })
      } )
    }
    else {
      res.json({
        message: 'Login Failed'
      })
    }
  })

})

module.exports = routes
