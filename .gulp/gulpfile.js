var gulp = require('gulp')
var all = require('gulp-all')
var del = require('del')

var targets = [
  "../../frontend/share",
  "../../backend/share"
]

var src = [
  "../**{, /*, /.*}",
  "!../.gulp{,/**, /**/*}"
]

function clean() {
  try {
    del.sync(targets, {force: true})
  } catch (e) {
    
  } finally {
    return Promise.resolve()
  }
}

function copy() {
  var task0 = gulp
    .src(src)
    .pipe(
      gulp.dest(targets[0])
    )
    
  var task1 = gulp
    .src(src)
    .pipe(
      gulp.dest(targets[1])
    )
    
  return all(task0, task1)
}

function watch() {
  return gulp.watch(src, copy)
}

gulp.task('watch', watch)
gulp.task('clean', clean)
gulp.task('copy', copy)
gulp.task('default', gulp.series( 'clean', 'watch', 'copy'))
