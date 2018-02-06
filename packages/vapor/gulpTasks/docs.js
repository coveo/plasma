const gulp = require('gulp-help')(require('gulp'));

gulp.task('docs', 'Build less, libs and sprites and copy it to docs', ['default', 'docs:external-libs'], () => {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('./docs/dist'));
});

gulp.task('docs:external-libs', 'Build dev libs and copy the js to docs', () => {
    return gulp.src('./node_modules/autosize/dist/autosize.js')
        .pipe(gulp.dest('./docs/dist/js'));
});
