'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');

const sources = {
  js: __dirname + '/src/index.js',
  html: __dirname + '/src/**/*.html',
}

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({output: {filename: 'bundle.js'}}))
    .pipe(gulp.dest('./build'));
});

gulp.task('copyHtml', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['bundle:dev', 'copyHtml']);
