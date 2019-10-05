var http = require('http');
var url = require('url');
var fs = require('fs');
// var msg = require('./firstModule')

const Server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.end(txt);
   fs.readFile('./fileExample.txt', (err , data ) => {
       res.writeHead(200,{'Content-Type' : 'text/html'});
    //    res.write(data);
    fs.appendFile('./newFile.txt',data,function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
       res.end();
   })
});

Server.listen(8009);