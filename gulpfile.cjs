const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function styles() {
  return gulp
    .src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('src/styles'));
}

function watch() {
  gulp.watch('src/**/*.scss', styles);
}

exports.default = gulp.series(styles, watch);