const config = require('./configuration');

const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const gzip = require('gulp-gzip');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const gzipOptions = config.gzipOptions;

const useMinifiedSources = gutil.env.min;
const useGzippedSources = gutil.env.gzip;

gulp.task('lib', 'Concat and export libs to dist folder', () => {
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
                    gutil.log(gutil.colors.red('File not found: ', path));
                    process.exit(1);
                }
            }
        });
    });

    return gulp.src(dependencies)
        .pipe(concat('CoveoStyleGuide.Dependencies.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulpif(useMinifiedSources, uglify()))
        .pipe(gulpif(useGzippedSources, gzip(gzipOptions)))
        .pipe(gulpif(useMinifiedSources, rename('CoveoStyleGuide.Dependencies.min.js')))
        .pipe(gulpif(useMinifiedSources, gulp.dest('./dist/js')));
});
