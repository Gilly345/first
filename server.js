var express = require('express')
var http = require('http')
var path = require('path')

var app = express()
var reload = require('reload');

 var app = express()
 app.get('/',function (req, res) {
     res.sendFile(path.join(__dirname, '/index.html'))
 })
 app.set('port',process.env.PORT || 3000)
 var server = http.createServer(app)
 //reload lapha
 reload(app);
 server.listen(app.get('port'),function () {
     console.log('Web server listening on port ' + app.get('port'))
 })