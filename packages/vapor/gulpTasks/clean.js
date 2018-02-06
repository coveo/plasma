const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const del = require('del');

gulp.task('clean', 'Delete the dist folder and clean the docs output', () => {
    const filesToDelete = ['./dist', './docs/dist', './_gh_pages', './.sass-cache', './tmp'];
    if (gutil.env.all === true) {
        filesToDelete.concat([
            '**/*.orig',
            '**/*.rej',
            'node_modules',
            'package-lock.json',
        ]);
    }
    return del(filesToDelete).then((deletedFiles) => {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
});
