/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
// OPTIONS
// --min                        Flag to enable minification                                         Default: false
// --gzip                       Flag to enable gziphication                                         Default: false
// --all                        Flag to remove all compiled files                                   Default: false

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
const parseArgs = require('minimist');
const _ = require('underscore');
const s = require('underscore.string');
const path = require('path');

const config = {
    gzipOptions: {
        append: false,
    },
};

// eslint-disable-next-line id-blacklist
const argv = parseArgs(process.argv.slice(2), {boolean: ['min', 'gzip', 'all']});
const useMinifiedSources = argv.min;
const useGzippedSources = argv.gzip;
const cleanAll = argv.all;

gulp.task('lib', () => {
    const dependencies = ['./lib/js/*'];
    dependencies.forEach((dependencyPath) => {
        fs.exists(dependencyPath, (exists) => {
            if (!exists) {
                if (dependencyPath.indexOf('*') === -1) {
                    log(colors.red('File not found: ', dependencyPath));
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
    const filesToDelete = ['./dist', './_gh_pages', './.sass-cache'];
    if (cleanAll) {
        filesToDelete.concat(['**/*.orig', '**/*.rej', 'node_modules']);
    }
    return import('del')
        .then((module) => module.deleteAsync)
        .then((del) =>
            del(filesToDelete).then((deletedFiles) => {
                log(colors.green('Files deleted:', deletedFiles.join(', ')));
                done();
            }),
        );
});

gulp.task('copy:images', () => gulp.src('./resources/images/**/*').pipe(gulp.dest('./dist/images/')));

gulp.task('copy:fonts', () => gulp.src('./resources/fonts/**/*').pipe(gulp.dest('./dist/fonts/')));

gulp.task('copy:js', () => gulp.src('./resources/js/**/*').pipe(gulp.dest('./dist/js/')));

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

    this.svgNames = Object.keys(this.json).map(s.camelize).sort();

    this.generateSvgNamesTypescriptType = (to) => {
        const code = `export type SvgName =\n\t| '${this.svgNames.join("'\n\t| '")}';\n`;
        fs.writeFileSync(to, code);
    };

    this.writeSvgEnumFile = (to) => {
        let code = 'import {svgWrapper} from "../svgWrapper.js";\n';
        code += 'export var svg = {';
        const that = this;
        Object.keys(this.json).forEach((key) => {
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
        gulp.src('./resources/icons/svg/coveo-search-ui-filetypes/*.svg').pipe(rename({prefix: 'ft-'})),
    );
    const data = {};

    return src
        .on('data', function (file) {
            const fileName = path.basename(file.path, '.svg'); // Extract the filename without extension
            const fileContent = file.contents.toString();
            data[fileName] = fileContent;
        })
        .on('end', () => {
            if (!fs.existsSync('dist')) {
                fs.mkdirSync('dist');
            }
            if (!fs.existsSync('dist/svg')) {
                fs.mkdirSync('dist/svg');
            }
            fs.writeFileSync('dist/svg/CoveoStyleGuideSvg.json', JSON.stringify(data, null, 2));
        });
});

gulp.task(
    'svg:enum',
    gulp.series('svg:concat', (done) => {
        const dict = new Dictionary('dist/svg/CoveoStyleGuideSvg.json');

        if (!fs.existsSync('tmp')) {
            fs.mkdirSync('tmp');
        }

        dict.writeSvgEnumFile('tmp/svg.js');
        dict.generateSvgNamesTypescriptType('SvgName.d.ts');

        done();
    }),
);

gulp.task('svg', gulp.series('svg:enum'));

gulp.task('default', gulp.series('lib', gulp.parallel('copy:images', 'copy:fonts', 'copy:js'), 'svg'));

gulp.task('watch', () => {
    gulp.watch('./resources/js/*.js', gulp.series('copy:js'));
});
