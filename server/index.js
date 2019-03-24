//Main entry point of the app
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
//app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

//server setup
const port = process.env.PORT || 3333;
const server = http.createServer(app);

server.listen(port);

console.log('Server is listening on port', port);