var concat = require('gulp-concat');
var del = require('del');
var git = require('gulp-git');
var gulp = require('gulp');
var rename = require('gulp-rename');
var run = require('gulp-run');

gulp.task('clean', function () {
    del(['styleguide', 'target'], function (err, deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});

gulp.task('kss-compile', function () {
    run('kss-node less --less less/guide.less --template template').exec([],
        function () {
            gulp.src('styleguide/public/style.css')
                .pipe(rename('CoveoStyleGuide.css'))
                .pipe(gulp.dest('target/package/css'));
        }
    );
});

gulp.task('lib', function () {
    return gulp.src(require('./config/dependencies').dependencies)
        .pipe(concat('CoveoStyleGuide.Dependencies.js'))
        .pipe(gulp.dest('styleguide/js'))
        .pipe(gulp.dest('target/package/js'));
});

gulp.task('pull', function () {
    git.pull('origin', 'master', function (err) {
        if (err) throw err;
    });
});

gulp.task('styleguide', ['kss-compile', 'lib'], function () {
    gulp.src('./images/**').pipe(gulp.dest('styleguide/images'));
});

gulp.task('default', ['styleguide']);