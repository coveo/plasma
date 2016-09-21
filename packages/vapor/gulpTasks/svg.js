var gulp = require('gulp-help')(require('gulp'));
var svgmin = require('gulp-svgmin');
var filesToJson = require('gulp-files-to-json');
var cheerio = require('gulp-cheerio');
var rename = require('gulp-rename');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var s = require('underscore.string');
var gfi = require('gulp-file-insert');
var del = require('del');

function Dictionary(from) {
    this.json = JSON.parse(fs.readFileSync(from));
    this.merge = function (dict) {
        this.json = _.extend(this.json, dict.json);
    };

    this.writeSvgEnumFile = function (to) {
        var code = 'var svgEnum = {\n';
        var that = this;
        _.each(_.keys(this.json), function (key) {
            var camelizedKey = s.camelize(key);
            code += '        ' + camelizedKey + ': { name : \'' + camelizedKey + '\', render : function(svgClass, spanClass, title, attr) { return svgWrapper(' + JSON.stringify(that.json[key]) + ', svgClass, spanClass, title, attr); } }, \n'
        });
        code += '    };';

        fs.writeFileSync(to, code);
    };
}

gulp.task('svg:concat', 'Concat all svg files into one in a json format and export it to dist/svg', function () {
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
        .pipe(gulp.dest('dist/svg'))
        .pipe(rename('icons.json'))
        .pipe(gulp.dest('docs/_data/'))
});

gulp.task('svg:enum', 'Enumerate the svgs in a variable',['svg:concat'], function() {
    var dict = new Dictionary('dist/svg/CoveoStyleGuideSvg.json');

    if (!fs.existsSync('tmp')) {
        fs.mkdirSync('tmp');
    }

    dict.writeSvgEnumFile('tmp/svg.js');

    gulp.src('resources/js/VaporSVG.js')
        .pipe(gfi({ '/* SVG Enum */': 'tmp/svg.js'}))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('svg', ['svg:enum']);
