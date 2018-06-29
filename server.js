// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');


// Get our API routes
const api = require('./routes/api');

const app = express();
app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'src')));


// Set our api routes
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

var  username,
     password;



app.post('/login-data', function(req, res) {
 console.log("hello",req.body,'dfffffffffffffffffffffffffffff');
  username=req.body.name;
  password=req.body.pass;

   if(username=="admin@gmail.com" && password=="admin"){
      console.log("You have login successfully!!",res.statusCode);
       res.json(res.statusCode);
   }

});

app.post('/get-data', function(req, res) {
 console.log("hello",req.body,'dfffffffffffffffffffffffffffff');
  var carouselTileItems = [
      {name:'a',img:'el-1.jpg'},
      {name:'a',img:'el-2.jpg'},
      {name:'a',img:'el-3.jpg'},
      {name:'a',img:'el-4.jpg'},
      {name:'a',img:'el-5.jpg'},
      {name:'a',img:'el-6.jpeg'},
      {name:'a',img:'el-7.jpg'},
      {name:'a',img:'el-8.jpeg'},
      {name:'a',img:'el-9.jpg'},
      {name:'a',img:'el-11.jpg'},
      {name:'a',img:'el-12.jpg'},
      {name:'a',img:'el-13.jpg'}
      ];
      var phoneTileItems = [
          {name:'a',img:'ph-1.jpg'},
          {name:'a',img:'ph-2.jpg'},
          {name:'a',img:'ph-3.jpg'},
          {name:'a',img:'ph-4.png'},
          {name:'a',img:'ph-5.jpg'},
          {name:'a',img:'ph-6.jpg'},
          {name:'a',img:'ph-7.jpg'},
          {name:'a',img:'ph-8.jpg'},
          {name:'a',img:'ph-9.jpg'},
          {name:'a',img:'ph-10.jpg'},
          {name:'a',img:'ph-11.jpeg'},
          {name:'a',img:'ph-12.png'}
          ];


      console.log("get data");
       res.send({
           elect:carouselTileItems,
           phone:phoneTileItems,
         });


});

/**ng
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
 var assert = require('assert');



server.listen(port, () => console.log(`API running on localhost:${port}`));
