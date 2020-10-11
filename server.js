var express = require("express");
const https = require('https');
var app = express();
const fs = require('fs');
const port = 8081;

app.use(express.static('public'));
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

//https cert PATH
var key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};


var server = https.createServer(options, app);

server.listen(port, function(){
    console.log("Server started at https://localhost:%s", port);
});


