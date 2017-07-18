const del = require('del');
const dtsGenerator = require('dts-generator');
const footer = require('gulp-footer');
const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const Karma = require('karma').Server;
const path = require('path');
const prettyTypescript = require('pretty-typescript');
const replace = require('gulp-replace');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const runSequence = require('gulp-sequence');
const webpack = require('webpack');

const webpackConfigFile = require('./webpack.config.prod.js');
const webpackDocsConfigFile = require('./webpack.config');

const webpackCompiler = webpack(Object.create(webpackConfigFile));
const webpackDocsCompiler = webpack(Object.create(webpackDocsConfigFile));

// <editor-fold desc="Clean">
const clean = (paths, done) => {
  del(paths, { force: true }).then((deletedFiles) => {
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

gulp.task('clean', 'Clean all', ['clean:dist', 'clean:docs', 'clean:tests']);
// </editor-fold>

// <editor-fold desc="Prettify">
const prettify = (srcPaths, destPath) =>
  gulp.src(srcPaths)
    .pipe(prettyTypescript())
    .pipe(gulp.dest(destPath));

gulp.task('prettify:src', false, () => prettify(['src/**/*.ts', 'src/**/*.tsx'], 'src'));

gulp.task('prettify:docs', false, () => prettify(['docs/**/*.ts', 'docs/**/*.tsx'], 'docs'));

gulp.task('prettify', 'Run the pretty Typescript plugin on the project', ['prettify:src', 'prettify:docs']);
// </editor-fold>

// <editor-fold desc="Typescript compilation">
const webpackCallback = (taskName, done) => (err, stats) => {
  if (err) {
    throw new gutil.PluginError(taskName, err);
  }
  gutil.log(taskName, stats.toString({
    colors: true,
    assets: false,
    chunks: false,
  }));
  done();
};

gulp.task('ts:compile', false, (done) => {
  webpackCompiler.run(webpackCallback('ts:compile', done));
});

gulp.task('ts:minify', false, (done) => {
  webpackConfigFile.output.filename = 'react-vapor.min.js';
  webpackConfigFile.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    mangle: {
      except: ['React', 'ReactDOM', 'Tether', '_'],
    },
  }));
  const webpackMinifier = webpack(Object.create(webpackConfigFile));

  webpackMinifier.run(webpackCallback('ts:minify', done));
});

gulp.task('ts:definitions', 'Generate the project definition file', (done) => {
  runSequence('internalDefs', 'cleanDefs', done);
});

gulp.task('ts', 'Compile Typescript', (done) => {
  runSequence('ts:compile', 'ts:minify', 'ts:definitions', done);
});

gulp.task('ts:docs', 'Compile docs Typescript', (done) => {
  webpackDocsCompiler.run(webpackCallback('ts:compile', done));
});
// </editor-fold>

// <editor-fold desc="Typescript d.ts generation">
gulp.task('internalDefs', false, () =>
  dtsGenerator.default({
    name: 'ReactVapor',
    project: './',
    out: 'dist/react-vapor.d.ts',
    exclude: ['node_modules/**/*.d.ts', 'src/Index.ts', '**/*Examples*'],
  }));

gulp.task('cleanDefs', false, () =>
  gulp.src('dist/react-vapor.d.ts')
    .pipe(replace(/: Partial<[A-Za-z]+>/gm, ''))
    .pipe(replace(/: React.KeyboardEvent<[A-Za-z]+>/gm, ''))
    .pipe(replace(/import.*$/gm, ''))
    .pipe(replace(/export =.+;$/gm, ''))
    .pipe(replace(/export default.+;$/gm, ''))
    .pipe(replace(/: React.MouseEvent<[A-Za-z]+>/gm, ''))
    .pipe(replace(/export .+ from .+$/gm, ''))
    .pipe(replace(/export (?:default )?(.*)$/gm, '$1'))
    .pipe(replace(/private .+;$/gm, ''))
    .pipe(replace(/\t[A-Za-z]+;$/gm, ''))
    .pipe(replace(/\n\t\s*(\n\t\s*)/g, '$1'))
    .pipe(replace(/declare module (.*) {$/gm, 'declare module ReactVapor {'))

    .pipe(footer('declare module "react-vapor" {\n\texport = ReactVapor;\n}'))

    .pipe(gulp.dest('dist')));
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
  runTests(done, true, 'PhantomJS');
});

gulp.task('test:remap', false, () =>
  gulp.src('./coverage/coverage.json')
    .pipe(remapIstanbul({
      reports: {
        html: 'coverage/report',
      },
    })));

gulp.task('test', 'Run all tests in PhantomJS and exit', (done) => {
  runSequence('prettify:src', 'test:single', 'test:remap', done);
});

gulp.task('test:browser', 'Run all tests in Chrome and watch', (done) => {
  runTests(done, false, 'Chrome');
});

gulp.task('test:watch', 'Run all tests in PhantomJS and watch', (done) => {
  runTests(done, false, 'PhantomJS');
});
// </editor-fold>

gulp.task('docs', 'Build the docs project', (done) => {
  runSequence('clean:docs', 'prettify:docs', 'ts:docs', done);
});

gulp.task('default', 'Clean, prettify and compile the project', (done) => {
  runSequence('clean:dist', 'prettify:src', 'ts', done);
});
