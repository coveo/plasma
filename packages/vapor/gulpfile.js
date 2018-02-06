// OPTIONS
// --min                        Flag to enable minification                                         Default: false
// --gzip                       Flag to enable gziphication                                         Default: false

const gulp = require('gulp-help')(require('gulp'));
const requireDir = require('require-dir');
const tasks = requireDir('./gulpTasks');

gulp.task('default', 'Build sass, libs and sprites to the dist folder', [
    'sass',
    'lib',
    'copy:images',
    'copy:fonts',
    'copy:js',
    'svg',
]);

gulp.task('watch', () => {
    gulp.watch('./scss/**/*', ['docs']);
    gulp.watch('./resources/js/**/*', ['copy:js']);
});
