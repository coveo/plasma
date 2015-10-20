var gulp = require('gulp-help')(require('gulp'));
var pngSprite = require('png-sprite');

gulp.task('sprites', 'Generate sprites from images and export to dist folder', function () {
    var template = '<%= "i." + node.className + ", ." + node.className %> {\
      background-position:<%= -node.x / ratio %>px <%= -node.y / ratio %>px;\
      width:<%= node.width / ratio %>px;\
      height:<%= node.height / ratio %>px;\
      text-indent:<%= node.width / ratio %>px;\
    }';

    return gulp.src('./resources/sprites/**/*.png')
        .pipe(pngSprite.gulp({
            cssPath: 'sprites.scss',
            pngPath: '../dist/images/CoveoStyleGuide.Sprites.png',
            relPath: '../images/CoveoStyleGuide.Sprites.png',
            eachTemplate: template,
            namespace: 'coveo-sprites'
        }))
        .pipe(gulp.dest('scss'));
});
