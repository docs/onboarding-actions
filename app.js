const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

var app = express();
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});