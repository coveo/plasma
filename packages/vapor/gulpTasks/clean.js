var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean', 'Delete the dist folder and clean the docs output', function () {
    del(['./dist', './docs/dist', './_gh_pages', './.sass-cache'], function (err, deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});
