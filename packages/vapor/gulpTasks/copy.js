var gulp = require('gulp-help')(require('gulp'));

gulp.task('copy:images', 'Copy images from resources/images to dist/images', function () {
    return gulp.src('./resources/images/**/*').pipe(gulp.dest('./dist/images'));
});

gulp.task('copy:fonts', 'Copy fonts from resources/fonts to dist/fonts', function () {
    return gulp.src('./resources/fonts/**/*').pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copy:js', 'Copy js from resources/js to dist/js', function () {
    return gulp.src('./resources/js/**/*').pipe(gulp.dest('./dist/js'));
});
