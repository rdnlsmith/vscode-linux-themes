var glob = require('glob');
var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');

// Run compiled theme generators
glob.sync('./themes/ts-built/**/*.js').forEach(function(file) {
    childProcess.spawnSync('node', [ path.resolve(file) ]);
});

// Move generated themes to the correct folders
glob.sync('./themes/ts-built/dark/*.json').forEach(function(file) {
    fs.renameSync(file, path.join(__dirname, 'themes', 'dark', path.basename(file)));
});

glob.sync('./themes/ts-built/light/*.json').forEach(function(file) {
    fs.renameSync(file, path.join(__dirname, 'themes', 'light', path.basename(file)));
});

// Populate the "contributes" property in package.json
var themes = [];

glob.sync('./themes/dark/*.json').forEach(function(file) {
    var theme = require(file);
    themes.push({
        label: theme.name,
        uiTheme: 'vs-dark',
        path: file
    });
});

glob.sync('./themes/light/*.json').forEach(function(file) {
    var theme = require(file);
    themes.push({
        label: theme.name,
        uiTheme: 'vs',
        path: file
    });
});

var package = require('./package.json');

package.contributes.themes = themes;

fs.writeFile('./package.json', JSON.stringify(package, null, 2), function(err) {
    if (err) return console.log(err);
    console.log('package.json updated');
});