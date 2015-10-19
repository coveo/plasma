var gulp = require('gulp-help')(require('gulp'));

gulp.task('watch', function () {
    gulp.watch('./less/**/*', ['less']);
});

gulp.task('watch:docs', function () {
    gulp.watch('./less/**/*', ['less:docs']);
});
