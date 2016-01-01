'use strict';

var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io')(server),
schools = require('./controllers/schools'),
userRoles = require('./controllers/userRoles');

app.use(express.static('public'));

app.get('/getSchools', schools.getSchools);

app.get('/getUserRoles', userRoles.getUserRoles);

app.get('/gurukul', function(req, res){
	res.sendFile('public/views/index.html', { root: __dirname });
});

server.listen(555, function(){
	console.log('Running server on http://localhost:%d',this.address().port);
});