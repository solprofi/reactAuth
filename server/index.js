//Main entry point of the app
const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./router');

//db setup
mongoose.connect('mongodb://localhost/auth');

//app setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//server setup
const port = process.env.PORT || 3333;
const server = http.createServer(app);

server.listen(port);

console.log('Server is listening on port', port);