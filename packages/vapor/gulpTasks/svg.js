var gulp = require('gulp-help')(require('gulp'));
var svgmin = require('gulp-svgmin');
var filesToJson = require('gulp-files-to-json');
var cheerio = require('gulp-cheerio');

gulp.task('svg', 'Concat all svg files into one in a json format and export it to dist/svg', function () {
    return gulp.src('./resources/icons/svg/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeAttrs: {
                    attrs: ['xmlns:*', 'xmlns', 'id']
                }
            },{
                removeUselessDefs: true
            }, {
                removeComments: true    
            }]
        }))
        .pipe(cheerio(function ($) {
            $('svg').each(function () {
                var svg = $(this);
                if (svg) {
                    var attrs = svg[0].attribs;
                    for (var attrName in attrs) {
                        if (attrName.match(/xmlns:.+/)) {
                            svg.removeAttr(attrName);
                        }
                    }
                }
            });
        }))
        .pipe(filesToJson('CoveoStyleGuideSvg.json'))
        .pipe(gulp.dest('dist/svg'));
});
