var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  var fileData;
  fs.readFile(path.resolve(__dirname, '../archives/sites/sites.txt'), 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      // console.log('line 34:', data);
      fileData = data;
    }
  });
  return fileData;
};

exports.isUrlInList = function(url, callback) {
  //var data = exports.readListOfUrls(callback);
  // data = 'example1.com';
  // console.log('DATA FROM FILEEEEEEEEEE41', data1, url);
  //console.log('INCLUDES CHECKKKKKK', data1.includes(url));
  //return data.includes(url);
  fs.readFile(path.resolve(__dirname, '../archives/sites/sites.txt'), 'utf8', (err, data) => {
    req.on()
    if (err) {
      throw err;
    } else {
      // console.log('line 34:', data);
      return data.includes(url);
    }
  });  
  
  
};

exports.addUrlToList = function(url, callback) {
  if (!exports.isUrlInList(url, callback)) {
    fs.appendFile(path.resolve(__dirname, '../archives/sites/sites.txt'), url, 'utf8', (err) => {
      if (err) { throw err; }
    });
  }
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
