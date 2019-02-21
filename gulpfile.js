const del = require('del');
const dtsGenerator = require('dts-generator');
const footer = require('gulp-footer');
const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const Karma = require('karma').Server;
const path = require('path');
const replace = require('gulp-replace');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const runSequence = require('gulp-sequence');

// <editor-fold desc="Clean">
const clean = (paths, done) => {
    del(paths, {force: true}).then((deletedFiles) => {
        gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
        done();
    });
};

gulp.task('clean:dist', false, (done) => {
    clean(['dist'], done);
});

gulp.task('clean:docs', false, (done) => {
    clean(['docs/assets'], done);
});

gulp.task('clean:tests', false, (done) => {
    clean(['coverage'], done);
});

gulp.task('clean', 'Clean all', ['clean:dist', 'clean:docs', 'clean:tests'], (done) => {
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
gulp.task('ts:definitions', 'Generate the project definition file', (done) => {
    runSequence('internalDefs', 'cleanDefs', done);
});

gulp.task('internalDefs', false, () =>
    dtsGenerator.default({
        project: './',
        out: 'dist/react-vapor.d.ts',
        exclude: ['node_modules/**/*.d.ts', '**/*Examples*', '**/*Example*', '**/*.spec.*', 'src/utils/TestUtils.ts'],
    })
);

gulp.task('cleanDefs', false, () =>
    gulp.src('dist/react-vapor.d.ts')
        .pipe(replace(/: Partial<[A-Za-z]+>/gm, ''))
        .pipe(replace(/: React.KeyboardEvent<[A-Za-z]+>/gm, ''))
        .pipe(replace(/: React.MouseEvent<[A-Za-z]+>/gm, ''))
        .pipe(replace(/: React.FocusEvent<[A-Za-z]+>/gm, ''))
        .pipe(replace(/import\s.*$/gm, ''))
        .pipe(replace(/export =.+;$/gm, ''))
        .pipe(replace(/export default.+;$/gm, ''))
        .pipe(replace(/export .+ from .+$/gm, ''))
        .pipe(replace(/export (?:default )?(.*)$/gm, '$1'))
        .pipe(replace(/private .+;$/gm, ''))
        .pipe(replace(/\t[A-Za-z]+;$/gm, ''))
        .pipe(replace(/\n\t\s*(\n\t\s*)/g, '$1'))
        .pipe(replace(/declare module (.*) {$/gm, 'declare module ReactVapor {'))

        .pipe(footer('declare module "react-vapor" {\n\texport = ReactVapor;\n}'))

        .pipe(gulp.dest('dist'))
);
// </editor-fold>

// <editor-fold desc="Unit tests">
const runTests = (done, singleRun, browser) => {
    new Karma({
        configFile: path.resolve('karma.conf.js'),
        browsers: [browser],
        singleRun,
    }, done).start();
};

gulp.task('test:single', false, (done) => {
    runTests(done, true, 'ChromeHeadless');
});

gulp.task('test:remap', false, () =>
    gulp.src('./coverage/coverage.json')
        .pipe(remapIstanbul({
            reports: {
                html: 'coverage/report',
            },
        })));

gulp.task('test', 'Run all tests and exit', (done) => {
    runSequence('test:single', 'test:remap', done);
});

gulp.task('test:browser', 'Run all tests directly in Chrome browser and watch', (done) => {
    runTests(done, false, 'Chrome');
});

gulp.task('test:watch', 'Run all tests and watch', (done) => {
    runTests(done, false, 'PhantomJS');
});
// </editor-fold>

gulp.task('default', 'Clean, and compile the project', (done) => {
    runSequence('clean:dist', 'ts:definitions', done);
});
