const del = require('del');
const gulp = require('gulp');
const colors = require('ansi-colors');
const log = require('fancy-log');
const parseArgs = require('minimist');

const argv = parseArgs(process.argv.slice(2), {boolean: 'all'});
const cleanAll = argv.all;
console.dir(argv);

// <editor-fold desc="Clean">
const clean = (paths, done) => {
    del(paths, {force: true}).then((deletedFiles) => {
        log(colors.green('Files deleted:'), deletedFiles.join(', '));
        done();
    });
};

gulp.task('clean:dist', (done) => {
    clean(['dist'], done);
});

gulp.task('clean:docs', (done) => {
    clean(['docs/assets'], done);
});

gulp.task('clean:tests', (done) => {
    clean(['coverage'], done);
});

gulp.task('clean:others', (done) => {
    if (cleanAll) {
        clean(['**/*.orig', '**/*.rej', 'node_modules', '.awcache'], done);
    } else {
        done();
    }
});

gulp.task('clean', gulp.series(gulp.parallel('clean:dist', 'clean:docs', 'clean:tests'), 'clean:others'));
// </editor-fold>

gulp.task('default', gulp.series('clean:dist'));
