const del = require('del');
const dtsGenerator = require('dts-generator');
const gulp = require('gulp');
const gutil = require('gulp-util');
const optimizeDeclarations = require('dts-generator-optimizer');

// <editor-fold desc="Clean">
const clean = (paths, done) => {
    del(paths, {force: true}).then((deletedFiles) => {
        gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
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

gulp.task('clean', gulp.parallel('clean:dist', 'clean:docs', 'clean:tests'), (done) => {
    if (gutil.env.all === true) {
        clean([
            '**/*.orig',
            '**/*.rej',
            'node_modules',
        ], done);
    } else {
        done();
    }
});
// </editor-fold>

// <editor-fold desc="Typescript d.ts generation">
gulp.task('internalDefs', () =>
    dtsGenerator.default({
        project: './',
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
    }));

gulp.task('cleanDefs', () =>
    gulp.src('dist/react-vapor.d.ts')
        .pipe(optimizeDeclarations({
            libraryName: 'ReactVapor',
            externalTypesToExport: ['redux-thunk'],
            internalImportPaths: ['src/'],
        }))
        .pipe(gulp.dest('dist'))
);
gulp.task('ts:definitions', gulp.series('internalDefs', 'cleanDefs'));
// </editor-fold>

gulp.task('default', gulp.series('clean:dist', 'ts:definitions'));
