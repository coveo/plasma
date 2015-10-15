var cheerio = require('gulp-cheerio');
var gulp = require('gulp-help')(require('gulp'));
var path = require('path');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

gulp.task('svg', 'Concat all svg files into one and export it to dist/svg', function () {
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
        .pipe(gulp.dest('dist/svg'));
});
