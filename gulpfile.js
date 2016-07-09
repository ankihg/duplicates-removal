'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');

const sources = {
  js: __dirname + '/src/index.js',
  html: __dirname + '/src/**/*.html',
  css: __dirname + '/src/styles/**/*.css',
  assets: __dirname + '/src/assets/**/*.*'
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

gulp.task('copyCss', () => {
  return gulp.src(sources.css)
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('copyAssets', () => {
  return gulp.src(sources.assets)
    .pipe(gulp.dest('./build/assets'));
})

gulp.task('default', ['bundle:dev', 'copyHtml', 'copyCss', 'copyAssets']);
