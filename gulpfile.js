const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// 'scss/**/*.scss' — поиск всех файлов '*.scss' во всех папках 'scss/**'
function buildStyles() {
  return src('scss/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTasks() {
  watch(['scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTasks);
