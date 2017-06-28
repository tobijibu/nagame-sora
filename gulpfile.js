'use strict';

var gulp            = require('gulp');
var browserify      = require('browserify');
var riot            = require('gulp-riot');
var sass            = require('node-sass');
var riotify         = require('riotify');
var source          = require('vinyl-source-stream');
var browsersync     = require('browser-sync');
var pug             = require('gulp-pug');
var convertEncoding = require('gulp-convert-encoding');
var plumber         = require('gulp-plumber');

/**
 * pug
 */
gulp.task('pug', function(){
  return gulp.src([
    './src/*.pug',
    './src/pug/**/*.pug',
    '!./src/_*.pug',
    '!./src/pug/**/_*.pug'
  ])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(convertEncoding({to: 'utf-8'}))
    .pipe(gulp.dest('dist/'))
    .pipe(browsersync.stream());
});

/**
 * js
 */
gulp.task('concat', function(){
  return browserify({entries: ['./src/main.js']})
    .transform(riotify, {template: 'pug'})
    .bundle()
    .on('error', function(err){
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(source('main.bundle.js'))
    .pipe(convertEncoding({to: 'utf-8'}))
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());
});

/**
 * riot
 */
gulp.task('riot', function(){
  return gulp.src([
    './src/module/*.tag',
    './src/module/**/*.tag',
    '!./src/module/_*.tag',
    '!./src/module/**/_*.tag'
  ])
    .pipe(riot({
      parsers: {
        css: {
          sass: function(tagName, css) {
            var result = sass.renderSync({
              data: css
            });
            return result.css.toString();
          }
        }
      }
    }))
    .pipe(convertEncoding({to: 'utf-8'}))
    .pipe(gulp.dest('dist/module'))
    .pipe(browsersync.stream());
});

/**
 * BrowserSync
 */
gulp.task('server', function(){
  browsersync.init({
    server: {
      baseDir: 'dist'
    },
    open: false,
  });
});

/**
 * copy
 */
gulp.task('copy', function(){
  return gulp.src([
    'src/css/**',
    'src/js/**',
    'src/img/**',
    'src/fonts/*',
    '!src/css/**/_*',
    '!src/js/**/_*',
    '!src/img/**/_*'
  ],{
    base: 'src'
  })
  .pipe(plumber())
  .pipe(gulp.dest('dist'))
  .pipe(browsersync.stream());
});

/**
 * Watch
 */
gulp.task('default', ['server'], function(){
  gulp.watch('dist/*', function(){
    browsersync.reload();
  });
  gulp.watch('src/img/*',   ['copy']);
  gulp.watch('src/fonts/*', ['copy']);
  gulp.watch('src/css/*',   ['copy']);
  gulp.watch('src/js/*',    ['copy']);
  gulp.watch('src/main.js', ['concat']);
  gulp.watch('src/**/*.tag',   ['riot']);
  gulp.watch('src/**/*.pug',   ['pug']);
})
