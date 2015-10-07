var autoprefixer = require('gulp-autoprefixer');
var cheerio = require('gulp-cheerio');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp-help')(require('gulp'));
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var gzip = require('gulp-gzip');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var pngSprite = require('png-sprite');
var rename = require('gulp-rename');
var run = require('gulp-run');
var sourcemaps = require('gulp-sourcemaps');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var uglify = require('gulp-uglify');

// Variables
var autoprefixerOptions = {
    browsers: ['Chrome >= 23', 'Firefox >= 21', 'Explorer >= 10', 'Opera >= 15', 'Safari >= 6']
};
var gzipOptions = {
    append: false
};
var useMinifiedSources = gutil.env.min;
var useGzippedSources = gutil.env.gzip;

// Utilities
var copyFonts = function (destination) {
    return gulp.src('./resources/fonts/**').pipe(gulp.dest(destination));
};

// Tasks
gulp.task('clean', 'Delete styleguide and target folders.', function () {
    del(['styleguide', 'target'], function (err, deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});

gulp.task('less', 'Compile less files to target.', function () {
    return gulp.src('./less/guide.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', function (err) {
            gutil.log(err.message);
        })
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(rename('CoveoStyleGuide.css'))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('./target/package/css'))
        .pipe(gulpif(useMinifiedSources, minifyCSS({
            keepSpecialComments: 0,
            processImport: false
        })))
        .pipe(gulpif(useGzippedSources, gzip(gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.min.css')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./target/package/css')));
});

gulp.task('lib', 'Concat and export js libs to styleguide and target.', function () {
    return gulp.src('lib/js/*')
        .pipe(concat('CoveoStyleGuide.Dependencies.js'))
        .pipe(gulp.dest('styleguide/js'))
        .pipe(gulp.dest('target/package/js'))
        .pipe(gulpif(useMinifiedSources, uglify()))
        .pipe(gulpif(useGzippedSources, gzip(gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.Dependencies.min.js')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('target/package/js')));
});

gulp.task('svg', function () {
    return gulp.src('./resources/icons/svg/*.svg')
        .pipe(svgmin())
        .pipe(cheerio({
            run: function ($, file) {
                var idPrefix = path.basename(file.path).split('.')[0] + '-';
                $('[id]').each(function () {
                    var id = $(this);
                    id.attr('id', idPrefix + id.attr('id'));
                });
                $('use').each(function () {
                    var id = $(this);
                    id.attr('xlink:href', '#' + idPrefix + id.attr('xlink:href').substring(1));
                });
                $('[mask]').each(function () {
                    var id = $(this);
                    var parts = id.attr('mask').split('#');
                    id.attr('mask', parts[0] + '#' + idPrefix + parts[1]);
                });
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(rename({prefix: 'coveo-icon-'}))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('icons.svg'))
        .pipe(gulp.dest('target/package/svg'));
});

gulp.task('sprites', 'Generate sprites from images and export to styleguide and target.', function () {
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

gulp.task('styleguide', 'Build the styleguide using kss-node', ['lib', 'sprites'], function () {
    run('kss-node less --less less/guide.less --template template').exec(function () {
        return gulp.src('styleguide/public/style.css')
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(gulp.dest('styleguide/public'));
    });
    gulp.src('./resources/images/**').pipe(gulp.dest('styleguide/images'));
    gulp.src('./target/package/images/*').pipe(gulp.dest('styleguide/images'));
    copyFonts('styleguide/fonts');
});

gulp.task('default', 'Compile less and dependencies and export to target.', ['less', 'lib', 'sprites', 'svg'], function () {
    gulp.src('./target/package/images/CoveoStyleGuide.Sprites.png').pipe(gulp.dest('styleguide/images'));
    copyFonts('target/package/fonts');
}, {
    aliases: ['d', 'D']
});

gulp.task('watch', function () {
    gulp.watch(['less/**/*'], ['styleguide']);
}, {
    aliases: ['w', 'W']
});