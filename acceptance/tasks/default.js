const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', cb => runSequence('spec', cb));

//to bind default gradle plugin's task (gulp_build) to our default gulp task (spec)
gulp.task('build', cb => runSequence('default', cb));
