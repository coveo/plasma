const gulp = require('gulp-help')(require('gulp'));
const svgmin = require('gulp-svgmin');
const filesToJson = require('gulp-files-to-json');
const cheerio = require('gulp-cheerio');
const rename = require('gulp-rename');
const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const s = require('underscore.string');
const gfi = require('gulp-file-insert');
const del = require('del');

function Dictionary(from) {
    this.json = JSON.parse(fs.readFileSync(from));
    this.merge = (dict) => {
        this.json = _.extend(this.json, dict.json);
    };

    this.writeSvgEnumFile = (to) => {
        let code = 'var svgEnum = {\n';
        const that = this;
        _.each(_.keys(this.json), (key) => {
            const camelizedKey = s.camelize(key);
            code += '        ' + camelizedKey + ': { name : \'' + camelizedKey + '\', render : function(svgClass, spanClass, title, attr) { return svgWrapper(' + JSON.stringify(that.json[key]) + ', svgClass, spanClass, title, attr); } }, \n';
        });
        code += '    };';

        fs.writeFileSync(to, code);
    };

    this.writeVaporSvgVersionFile = (to) => {
        const code = 'VaporSVG.version = ' + JSON.stringify(require('../package.json').version) + ';';
        fs.writeFileSync(to, code);
    };
}

gulp.task('svg:concat', 'Concat all svg files into one in a json format and export it to dist/svg', () => {
    return gulp.src('./resources/icons/svg/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeAttrs: {
                    attrs: ['xmlns:*', 'xmlns', 'id'],
                },
            }, {
                removeUselessDefs: true,
            }, {
                removeComments: true,
            }],
        }))
        .pipe(cheerio(($) => {
            // tslint:disable-next-line
            $('svg').each(function () {
                const svg = $(this);
                if (svg) {
                    const attrs = svg[0].attribs;
                    for (const attrName in attrs) {
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
        .pipe(gulp.dest('docs/_data/'));
});

gulp.task('svg:enum', 'Enumerate the svgs in a variable', ['svg:concat'], () => {
    const dict = new Dictionary('dist/svg/CoveoStyleGuideSvg.json');

    if (!fs.existsSync('tmp')) {
        fs.mkdirSync('tmp');
    }

    dict.writeSvgEnumFile('tmp/svg.js');

    dict.writeVaporSvgVersionFile('tmp/version.js');

    gulp.src('resources/js/VaporSVG.js')
        .pipe(gfi({'/* SVG Enum */': 'tmp/svg.js'}))
        .pipe(gfi({'/* VaporSVG version */': 'tmp/version.js'}))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('svg', ['svg:enum']);
