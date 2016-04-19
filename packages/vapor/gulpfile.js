// OPTIONS
// --min                        Flag to enable minification                                         Default: false
// --gzip                       Flag to enable gziphication                                         Default: false

var gulp = require('gulp-help')(require('gulp'));
var requireDir = require('require-dir');
var tasks = requireDir('./gulpTasks');

gulp.task('default', 'Build sass, libs and sprites to the dist folder', [
    'sass',
    'lib',
    'copy:images',
    'copy:fonts',
    'copy:js',
    'svg'
]);

gulp.task('watch', function () {
    gulp.watch('./scss/**/*', ['docs']);
    gulp.watch('./resources/js/**/*', ['copy:js']);
});
