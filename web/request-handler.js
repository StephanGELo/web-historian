var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http');
var url = require('url');
// require more modules/folders here!
var helpers = require('./http-helpers');


exports.handleRequest = function (req, res) {
  
  
  if (req.method === 'GET' && req.url === '/') {
  
    fs.readFile(__dirname + '/public/index.html', 'utf8', (err, data) => {
     
      if (err) {
        throw err;
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json', 'access-control-max-age': 10000 });
      res.end(JSON.stringify(data));
    });
    
  } else if (req.method === 'GET' && req.url === '/www.google.com') {
    console.log('URL====', req.url);
    
    fs.readFile(path.resolve(__dirname, '../test/testdata/sites/www.google.com'), 'utf8', (err, data) => {
     
      if (err) {
        throw err;
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json', 'access-control-max-age': 10000 });
      res.end(JSON.stringify(data));
    });
    
  } else if (req.method === 'POST') {
    let body = [];
    
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = body.join('');
      console.log('BODYYYYYYYYY', body.slice(4));
      // body = Buffer.concat(body).toString();
      fs.appendFile(path.resolve(__dirname, '../archives/sites/sites.txt'), body.slice(4) + '\n', 'utf8', (err) => {
        if (err) { throw err; }
        console.log('data appended');
      });
      res.writeHead(302);
    });  
   
  } else {
    res.writeHead(404);
    res.end();
  }
  
};
