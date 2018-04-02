// vdcode调试node import报错
import path from 'path';
import http from 'http';
http.createServer(function(req, res) {
    res.end('aaa');
}).listen(9001)
