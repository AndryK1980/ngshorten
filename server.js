//Install express server
const express = require('express');
const http= require('http');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.resolve(__dirname + '/dist')));

app.get('/*', function(req,res) {

res.sendFile(path.resolve(__dirname+'/dist/ngshort/index.html'));
});

// Start the app by listening on the default Heroku port
const port=process.env.PORT || '8080';
app.set('port',port);
const server=http.createServer(app);
server.listen(port, ()=>console.log('Be happy'));

