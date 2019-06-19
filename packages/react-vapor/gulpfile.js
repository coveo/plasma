const del = require('del');
const dtsGenerator = require('dts-generator');
const gulp = require('gulp');
const colors = require('ansi-colors');
const log = require('fancy-log');
const parseArgs = require('minimist');
const optimizeDeclarations = require('dts-generator-optimizer');

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
        clean(['**/*.orig', '**/*.rej', 'node_modules'], done);
    } else {
        done();
    }
});

gulp.task('clean', gulp.series(gulp.parallel('clean:dist', 'clean:docs', 'clean:tests'), 'clean:others'));
// </editor-fold>

// <editor-fold desc="Typescript d.ts generation">
gulp.task('internalDefs', () =>
    dtsGenerator.default({
        project: 'tsconfig.build.json',
        out: 'dist/react-vapor.d.ts',
        exclude: [
            'node_modules/**/*.d.ts',
            'docs/**/*',
            'types/**/*',
            'src/Index.ts',
            '**/*Examples*',
            '**/*Example*',
            '**/*.spec.*',
            'src/utils/tests/**/*',
        ],
    })
);

gulp.task('cleanDefs', () =>
    gulp
        .src('dist/react-vapor.d.ts')
        .pipe(
            optimizeDeclarations({
                libraryName: 'ReactVapor',
                externalTypesToExport: ['redux-thunk'],
                internalImportPaths: ['src/'],
            })
        )
        .pipe(gulp.dest('dist'))
);
gulp.task('ts:definitions', gulp.series('internalDefs', 'cleanDefs'));
// </editor-fold>

gulp.task('default', gulp.series('clean:dist', 'ts:definitions'));
