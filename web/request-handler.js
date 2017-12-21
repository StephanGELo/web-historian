var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http');
var url = require('url');
// require more modules/folders here!
var helpers = require('./http-helpers');

exports.handleRequest = function (req, res) {
  
  console.log('LOGGING THE REQ s', req);
  if (req.method === 'GET' && req.url === '/') {
  
    fs.readFile(__dirname + '/public/index.html', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  
 
  } else if (req.method === 'POST') {
    
    fs.appendFile(path.resolve(__dirname, '../archives/sites/sites.txt'), 'data', (err) => {
      if (err) { throw err };
      //console.log('data appended');
    });
  } else {
    res.writeHead(404);
    res.end();
  }
  
};

// http.createServer(function (req, res) {
//     var query = url.parse(req.url,true).query;
//     res.end(JSON.stringify(query));
// }).listen(3333);
