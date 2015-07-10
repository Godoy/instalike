var express = require('express'),
config = require('./config/config'),
passport = require('./config/passport');


var app = express();

require('./config/express')(app, config);

app.listen(config.port);

