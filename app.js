const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;
var express = require('express');
var app = express();

// 静态文件目录
var staticDir = path.join(__dirname, 'static');
app.use(express.static(staticDir));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/static/index.html');
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log('Example app listening on port 3000!');
});

// let server = http.createServer(function (req, res) {
//   let url = req.url;
//   if (url == '/') {
//     url += 'index.html';
//   }
//
//   // IMPORTANT: Your application HAS to respond to GET /health with status 200
//   //            for OpenShift health monitoring
//
//   if (url == '/health') {
//     res.writeHead(200);
//     res.end();
//   } else if (url.indexOf('/info/') == 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Cache-Control', 'no-cache, no-store');
//     res.end(JSON.stringify(sysInfo[url.slice(6)]()));
//   } else {
//     fs.readFile('./static' + url, function (err, data) {
//       console.log(url);
//       if (err) {
//         res.writeHead(404);
//         res.end();
//       } else {
//         let ext = path.extname(url).slice(1);
//         // res.setHeader('Content-Type', contentTypes[ext]);
//         // if (ext === 'html') {
//         //   res.setHeader('Cache-Control', 'no-cache, no-store');
//         // }
//         res.end(data);
//       }
//     });
//   }
// });
//
// server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
//   console.log(`Application worker ${process.pid} started...`);
// });
