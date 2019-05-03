// OPTIONS
// --min                        Flag to enable minification                                         Default: false
// --gzip                       Flag to enable gziphication                                         Default: false
// --all                        Flag to remove all compiled files                                   Default: false

const del = require('del');
const pngSprite = require('coveo-png-sprite');
const gulp = require('gulp');
const fs = require('fs');
const colors = require('ansi-colors');
const log = require('fancy-log');
const gulpif = require('gulp-if');
const gzip = require('gulp-gzip');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const merge = require('merge-stream');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const filesToJson = require('gulp-files-to-json');
const gfi = require('gulp-file-insert');
const sortJSON = require('gulp-json-sort').default;
const PluginError = require('plugin-error');
const parseArgs = require('minimist');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-clean-css');
const _ = require('underscore');
const s = require('underscore.string');

const config = {
    autoprefixerOptions: {
        browsers: ['cover 90%', 'last 1 versions', 'IE 11', 'not dead'],
    },
    gzipOptions: {
        append: false,
    },
};

const argv = parseArgs(process.argv.slice(2), {boolean: ['min', 'gzip', 'all']});
const useMinifiedSources = argv.min;
const useGzippedSources = argv.gzip;
const cleanAll = argv.all;

gulp.task('lib', () => {
    const dependencies = [
        './node_modules/coveo-slider/dist/js/Coveo.Slider.js',
        './node_modules/chosen-npm/public/chosen.jquery.js',
        './node_modules/materialize-css/js/jquery.easing.1.3.js',
        './node_modules/materialize-css/js/collapsible.js',
        './lib/js/*',
    ];
    dependencies.forEach((path) => {
        fs.exists(path, (exists) => {
            if (!exists) {
                if (path.indexOf('*') === -1) {
                    log(colors.red('File not found: ', path));
                    process.exit(1);
                }
            }
        });
    });

    return gulp.src(dependencies)
        .pipe(concat('CoveoStyleGuide.Dependencies.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulpif(useMinifiedSources, uglify()))
        .pipe(gulpif(useGzippedSources, gzip(config.gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.Dependencies.min.js')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/js')));
});

gulp.task('clean', (done) => {
    const filesToDelete = ['./dist', './docs/dist', './_gh_pages', './.sass-cache', './tmp'];
    if (cleanAll) {
        filesToDelete.concat([
            '**/*.orig',
            '**/*.rej',
            'node_modules',
            'package-lock.json',
        ]);
    }
    return del(filesToDelete).then((deletedFiles) => {
        log(colors.green('Files deleted:', deletedFiles.join(', ')));
        done();
    });
});

gulp.task('copy:images', () => {
    return gulp.src('./resources/images/**/*').pipe(gulp.dest('./dist/images/'));
});

gulp.task('copy:fonts', () => {
    return gulp.src('./resources/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('copy:js', () => {
    return gulp.src('./resources/js/**/*').pipe(gulp.dest('./dist/js/'));
});

gulp.task('palette', (done) => {
    const paletteMap = fs.readFileSync('./scss/common/palette.scss', 'utf8')
        .match(/\$.+(?=:)/g)
        .reduce(
            (partialPalette, sassVariable) => `${partialPalette}    ${sassVariable.slice(1)}: ${sassVariable},\n`,
            '$palette: (\n'
        )
        .concat(');\n');

    fs.writeFile('./scss/common/palette-map.scss', paletteMap, done);
});

gulp.task('sprites', () => {
    const template = '<%= "i." + node.className + ", ." + node.className %> {\
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
            namespace: 'coveo-sprites',
        }))
        .pipe(gulp.dest('scss'));
});

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
            const svgString = JSON.stringify(that.json[key]);
            code += '        ' + camelizedKey + ': { name : \'' + camelizedKey + '\', svgString : ' + svgString + ', render : function(svgClass, spanClass, title, attr) { return svgWrapper(VaporSVG.svg[\'' + camelizedKey + '\'].svgString, svgClass, spanClass, title, attr); } }, \n';
        });
        code += '    };';

        fs.writeFileSync(to, code);
    };

    this.writeVaporSvgVersionFile = (to) => {
        const code = 'VaporSVG.version = ' + JSON.stringify(require('./package.json').version) + ';';
        fs.writeFileSync(to, code);
    };
}

gulp.task('svg:concat', () => {
    const src = merge(
        gulp.src('./resources/icons/svg/*.svg'),
        // taken from https://github.com/coveo/search-ui/tree/master/image/svg/filetypes . Update as needed.
        gulp.src('./resources/icons/svg/coveo-search-ui-filetypes/*.svg').pipe(rename({prefix: 'ft-'}))
    );

    return src
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
            $('svg').each(function() {
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
        .pipe(sortJSON())
        .pipe(rename('icons.json'))
        .pipe(gulp.dest('docs/_data/'));
});

gulp.task('svg:enum', gulp.series('svg:concat', () => {
    const dict = new Dictionary('dist/svg/CoveoStyleGuideSvg.json');

    if (!fs.existsSync('tmp')) {
        fs.mkdirSync('tmp');
    }

    dict.writeSvgEnumFile('tmp/svg.js');

    dict.writeVaporSvgVersionFile('tmp/version.js');

    return gulp.src('resources/js/VaporSVG.js')
        .pipe(gfi({'/* SVG Enum */': 'tmp/svg.js'}))
        .pipe(gfi({'/* VaporSVG version */': 'tmp/version.js'}))
        .pipe(gulp.dest('dist/js/'));
}));

gulp.task('svg', gulp.series('svg:enum'));

gulp.task('sass', gulp.series('palette', 'sprites', (done) => {
    return gulp.src('./scss/guide.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', (err) => {
            sassError(err, done);
        }))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(rename('CoveoStyleGuide.css'))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulpif(useMinifiedSources, minifyCSS({
            keepSpecialComments: 0,
            processImport: false,
        })))
        .pipe(gulpif(useGzippedSources, gzip(config.gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.min.css')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/css')));
}));

gulp.task('sass:format', () => {
    return gulp.src([
        './scss/**/*.scss',
        '!./scss/icons/svgs.scss',
        '!./scss/utility/colors.scss',
        '!./scss/utility/border.scss',
        '!./scss/utility/default-white-space.scss',
        '!./scss/helpers.scss',
        '!./scss/sprites.scss',
    ])
        .pipe(csscomb())
        .pipe(gulp.dest('./scss'));
});

function sassError(err, doneCallback) {
    process.stderr.write(new PluginError('sass', err.messageFormatted).toString() + '\n');
    doneCallback(1);
}

gulp.task('default', gulp.series(
    gulp.parallel('sass', 'lib'),
    gulp.parallel('copy:images', 'copy:fonts', 'copy:js'),
    'svg'
));

gulp.task('docs:external-libs', () => {
    return gulp.src('./node_modules/autosize/dist/autosize.js')
        .pipe(gulp.dest('./docs/dist/js'));
});

gulp.task('docs:copy', () => {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('./docs/dist'));
});

gulp.task('docs', gulp.series('clean', 'default', 'docs:external-libs', 'docs:copy'));

gulp.task('watch', () => {
    gulp.watch(['./scss/**/*.scss', '!./scss/common/palette-map.scss', '!./scss/sprites.scss'], gulp.series('docs'));
    gulp.watch('./resources/js/*.js', gulp.series('copy:js'));
});
