var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var fs = require('fs');
var glob = require('glob');
var spawnSync = require('child_process').spawnSync;
var through = require('through2');

var tsProject = ts.createProject('tsconfig.json');

function cleanTypeScript() {
    return gulp.src('themes/ts-built', {read: false})
        .pipe(clean());
}

function buildTypeScript() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('./themes/ts-built'));
}

function generateJson() {
    return gulp.src('themes/ts-built/**/*.js')
        .pipe(through.obj(function(file, encoding, callback) {
            spawnSync('node', [ file.path ]);
            callback(null, file);
        }));
}

function copyJson() {
    return gulp.src('themes/ts-built/**/*.json')
        .pipe(gulp.dest('themes'));
}

function inject(done) {
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
    done();
}

gulp.task('build', gulp.series(cleanTypeScript, buildTypeScript, generateJson, copyJson, inject));

gulp.task('default', gulp.series('build'));
 
gulp.task('watch', gulp.series('build', function() {
    gulp.watch('themes/src/**/*.ts', gulp.series('build'));
}));