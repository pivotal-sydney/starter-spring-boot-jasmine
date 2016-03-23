const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('spec', () => {
    return gulp.src('spec/integration/**/*.js')
        .pipe(plugins.plumber())
        .pipe(plugins.jasmine({includeStackTrace: true}));
});

