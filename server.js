const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSanitized = require('express-sanitize-escape');
const path = require('path');
const morgan = require('morgan');
const port = 1123; // will shift this to config soon
const routes = require('./api_server/routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(expressSanitized.middleware())

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'dist'), { dotfiles: 'ignore', index: false }));
app.use(express.static('public'))

// Path for the API Server Routes ------------------------------------------------------------------------------------

app.use('/api', routes);


// Every path (other than those define above), will be serving from index.html ----------------------------------------
app.get('*', function(req, res, next){
  var indexFile = path.resolve(__dirname+'/public', 'index.html')
  console.log('Request: [GET] : ', req.originalUrl)

  res.sendFile(indexFile);
})

// server start
app.listen(port);
console.log('Server Start at Port::' + port);
