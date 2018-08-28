const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var PORT = process.env.PORT || 8080;

// create JSON body parser
var jsonParser = bodyParser.json()

// create
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse different kinds of JSON types
app.use(bodyParser.json({
  type: 'application/*+json'
}))

// parse into a buffer
app.use(bodyParser.json({
  type: 'application/vnd.custom-type'
}))

// parse HTML body into string
app.use(bodyParser.text({
  type: 'text/html'
}))

require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlRouting.js")(app);

// listen on port 8080 using express
app.listen(PORT, function() {
  console.log("App listening on Port: " + PORT + "\n");
});
