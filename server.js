// server.js

const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routes/CoinRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:123456d@ds253094.mlab.com:53094/coindb');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });

 app.use('/coins', CoinRouter);



