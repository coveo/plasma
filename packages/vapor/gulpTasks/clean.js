var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean', 'Delete the dist folder and clean the docs output', function() {
    return del(['./dist', './docs/dist', './_gh_pages', './.sass-cache', './tmp']).then(function(deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});
