var config = require('./configuration');

var gulp = require('gulp-help')(require('gulp'));
var fs = require('fs');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var gzip = require('gulp-gzip');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var gzipOptions = config.gzipOptions;

var useMinifiedSources = gutil.env.min;
var useGzippedSources = gutil.env.gzip;

gulp.task('lib', 'Concat and export libs to dist folder', function() {
    var dependencies = [
        './node_modules/coveo-slider/dist/js/Coveo.Slider.js',
        './node_modules/chosen-npm/public/chosen.jquery.js',
        './node_modules/materialize-css/js/jquery.easing.1.3.js',
        './node_modules/materialize-css/js/collapsible.js',
        './lib/js/*'
    ];
    dependencies.forEach(function(path) {
        fs.exists(path, function(exists) {
            if (!exists) {
                if (path.indexOf('*') == -1) {
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
