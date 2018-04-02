'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// vdcode调试node import报错
_http2.default.createServer(function (req, res) {
    res.end('aaa');
}).listen(9001);
//# sourceMappingURL=index.js.map