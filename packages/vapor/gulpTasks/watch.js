var gulp = require('gulp-help')(require('gulp'));

gulp.task('watch', function () {
    gulp.watch('./scss/**/*', ['sass']);
});

gulp.task('watch:docs', function () {
    gulp.watch('./scss/**/*', ['sass:docs']);
});
