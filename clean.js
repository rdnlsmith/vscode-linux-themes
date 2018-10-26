var glob = require('glob');
var fs = require('fs');
var path = require('path');

glob.sync('./themes/ts-built/**/*.js').forEach(function(file) {
    fs.unlinkSync(path.resolve(file));
});