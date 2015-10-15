var gulp = require('gulp-help')(require('gulp'));

gulp.task('docs', 'Build less, libs and sprites and copy it to docs', ['default'], function () {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('./docs/dist'));
});
