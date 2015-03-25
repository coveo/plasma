var concat = require('gulp-concat');
var del = require('del');
var git = require('gulp-git');
var gulp = require('gulp-help')(require('gulp'));
var less = require('gulp-less');
var pngSprite = require('png-sprite');
var rename = require('gulp-rename');
var run = require('gulp-run');

gulp.task('clean', function () {
    del(['styleguide', 'target'], function (err, deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});

gulp.task('sprites', 'Generate sprites.less from images', function () {
    var template = '<%= "i." + node.className + ", ." + node.className %> {\
      background-position:<%= -node.x / ratio %>px <%= -node.y / ratio %>px;\
      width:<%= node.width / ratio %>px;\
      height:<%= node.height / ratio %>px;\
      text-indent:<%= node.width / ratio %>px;\
    }';

    return gulp.src('./resources/sprites/**/*.png')
        .pipe(pngSprite.gulp({
            cssPath: 'sprites.less',
            pngPath: '../target/package/images/CoveoStyleGuide.Sprites.png',
            relPath: '../images/CoveoStyleGuide.Sprites.png',
            eachTemplate: template,
            namespace: 'coveo-sprites'
        }))
        .pipe(gulp.dest('less'));
});

gulp.task('kss-compile', 'Build the styleguide using kss-node', ['sprites'], function () {
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
    gulp.src('./resources/images/**').pipe(gulp.dest('styleguide/images'));
    gulp.src('./resources/fonts/**').pipe(gulp.dest('styleguide/fonts'));
    gulp.src('./target/package/images/CoveoStyleGuide.Sprites.png').pipe(gulp.dest('styleguide/images'));
});

gulp.task('default', 'Compile with all dependencies', ['styleguide'], function () {}, {
    aliases: ['d', 'D']
});

gulp.task('watch', function () {
    gulp.watch(['less/**/*'], ['kss-compile']);
}, {
    aliases: ['w', 'W']
});