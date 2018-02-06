const gulp = require('gulp-help')(require('gulp'));

gulp.task('copy:images', 'Copy images from resources/images to dist/images', () => {
    return gulp.src('./resources/images/**/*').pipe(gulp.dest('./dist/images'));
});

gulp.task('copy:fonts', 'Copy fonts from resources/fonts to dist/fonts', () => {
    return gulp.src('./resources/fonts/**/*').pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copy:js', 'Copy js from resources/js to dist/js', () => {
    return gulp.src('./resources/js/**/*').pipe(gulp.dest('./dist/js'));
});
