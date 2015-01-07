var del = require('del');
var git = require('gulp-git');
var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('clean', function () {
    del(['styleguide'], function (err, deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});

gulp.task('kss-compile', function() {
   run('kss-node less --less less/guide.less --template template').exec()
});

gulp.task('pull', function(){
    git.pull('origin', 'master', function (err) {
        if (err) throw err;
    });
});

gulp.task('styleguide', ['kss-compile'], function () {
    gulp.src('./images/**').pipe(gulp.dest('styleguide/images'));
    gulp.src('./lib/**').pipe(gulp.dest('styleguide/lib'));
});

gulp.task('default', ['styleguide']);