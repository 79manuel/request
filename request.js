// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Downloading image... ', response.statusMessage);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
       .on("finish", function(){
          console.log('Download complete.');
     });

