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
const parseArgs = require('minimist');
const _ = require('underscore');
const s = require('underscore.string');

const config = {
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
        '../../node_modules/coveo-slider/dist/js/Coveo.Slider.js',
        '../../node_modules/chosen-npm/public/chosen.jquery.js',
        '../../node_modules/materialize-css/js/jquery.easing.1.3.js',
        '../../node_modules/materialize-css/js/collapsible.js',
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

    return gulp
        .src(dependencies)
        .pipe(concat('CoveoStyleGuide.Dependencies.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulpif(useMinifiedSources, uglify()))
        .pipe(gulpif(useGzippedSources, gzip(config.gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.Dependencies.min.js')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/js')));
});

gulp.task('clean', (done) => {
    const filesToDelete = ['./dist', './_gh_pages', './.sass-cache', './tmp'];
    if (cleanAll) {
        filesToDelete.concat(['**/*.orig', '**/*.rej', 'node_modules', 'package-lock.json']);
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
    const paletteMap = fs
        .readFileSync('./scss/common/palette.scss', 'utf8')
        .match(/\$.+(?=:)/g)
        .reduce(
            (partialPalette, sassVariable) => `${partialPalette}    ${sassVariable.slice(1)}: ${sassVariable},\n`,
            '$palette: (\n'
        )
        .concat(');\n');

    fs.writeFile('./scss/common/palette-map.scss', paletteMap, done);
});

gulp.task('sprites', () => {
    const template =
        '<%= "i." + node.className + ", ." + node.className %> {\
      background-position:<%= -node.x / ratio %>px <%= -node.y / ratio %>px;\
      width:<%= node.width / ratio %>px;\
      height:<%= node.height / ratio %>px;\
      text-indent:<%= node.width / ratio %>px;\
    }';

    return gulp
        .src('./resources/sprites/**/*.png')
        .pipe(
            pngSprite.gulp({
                cssPath: 'sprites.scss',
                pngPath: '../dist/images/CoveoStyleGuide.Sprites.png',
                relPath: '../dist/images/CoveoStyleGuide.Sprites.png',
                eachTemplate: template,
                namespace: 'coveo-sprites',
            })
        )
        .pipe(gulp.dest('scss'));
});

const svgTemplate = (key, svgString, unformattedKey) => `
    ${key}: {
        name: "${key}",
        fileName: "${unformattedKey}.svg",
        svgString: ${svgString},
        render: function(svgClass, spanClass, title, attr){ return svgWrapper(svg.${key}.svgString, svgClass, spanClass, title, attr)},
    },`;

function Dictionary(from) {
    this.json = JSON.parse(fs.readFileSync(from));
    this.merge = (dict) => {
        this.json = _.extend(this.json, dict.json);
    };

    this.writeSvgEnumFile = (to) => {
        let code = 'import {svgWrapper} from "../svgWrapper.js";\n';
        code += 'export var svg = {';
        const that = this;
        _.each(_.keys(this.json), (key) => {
            const camelizedKey = s.camelize(key);
            const svgString = JSON.stringify(that.json[key]);
            const unformattedKey = key.startsWith('ft-') ? key.replace('ft-', 'coveo-search-ui-filetypes/') : key;

            code += svgTemplate(camelizedKey, svgString, unformattedKey);
        });
        code += '\n};';

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
        .pipe(
            svgmin({
                plugins: [
                    {
                        removeAttrs: {
                            attrs: ['xmlns:*', 'xmlns'],
                        },
                    },
                    {
                        removeUselessDefs: true,
                    },
                    {
                        removeComments: true,
                    },
                ],
            })
        )
        .pipe(
            cheerio(($) => {
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
            })
        )
        .pipe(filesToJson('CoveoStyleGuideSvg.json'))
        .pipe(gulp.dest('dist/svg'));
});

gulp.task(
    'svg:enum',
    gulp.series('svg:concat', (done) => {
        const dict = new Dictionary('dist/svg/CoveoStyleGuideSvg.json');

        if (!fs.existsSync('tmp')) {
            fs.mkdirSync('tmp');
        }

        dict.writeSvgEnumFile('tmp/svg.js');

        done();
    })
);

gulp.task('svg', gulp.series('svg:enum'));

gulp.task(
    'default',
    gulp.series('lib', 'palette', 'sprites', gulp.parallel('copy:images', 'copy:fonts', 'copy:js'), 'svg')
);

gulp.task('watch', () => {
    gulp.watch('./resources/js/*.js', gulp.series('copy:js'));
});
