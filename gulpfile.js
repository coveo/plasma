'use strict';

const del = require('del');
const footer = require('gulp-footer');
const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const karma = require('karma').Server;
const merge = require('merge-stream');
const path = require('path');
const prettyTypescript = require('pretty-typescript');
const replace = require('gulp-replace');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const runSequence = require('gulp-sequence');
const webpack = require('webpack');

let webpackConfigFile = require('./webpack.config.prod.js');
let webpackDocsConfigFile = require('./webpack.config');

let webpackCompiler = webpack(Object.create(webpackConfigFile));
let webpackDocsCompiler = webpack(Object.create(webpackDocsConfigFile));

//<editor-fold desc="Clean">
let clean = (paths, done) => {
  del(paths, {force: true}).then(deletedFiles => {
    gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
    done();
  });
};

gulp.task('clean:dist', false, done => {
  clean(['dist'], done);
});

gulp.task('clean:docs', false, done => {
  clean(['docs/assets'], done);
});

gulp.task('clean:tests', false, done => {
  clean(['coverage'], done);
});

gulp.task('clean', 'Clean all', ['clean:dist', 'clean:docs', 'clean:tests']);
//</editor-fold>

//<editor-fold desc="Prettify">
let prettify = (srcPaths, destPath) => {
  return gulp.src(srcPaths)
    .pipe(prettyTypescript())
    .pipe(gulp.dest(destPath));
};

gulp.task('prettify:src', false, () => {
  return prettify(['src/**/*.ts', 'src/**/*.tsx'], 'src');
});

gulp.task('prettify:docs', false, () => {
  return prettify(['docs/**/*.ts', 'docs/**/*.tsx'], 'docs');
});

gulp.task('prettify:tests', false, () => {
  return prettify(['tests/**/*.ts', 'tests/**/*.tsx'], 'tests');
});

gulp.task('prettify', 'Run the pretty Typescript plugin on the project', ['prettify:src', 'prettify:docs', 'prettify:tests']);
//</editor-fold>

//<editor-fold desc="Typescript compilation">
let webpackCallback =
  (taskName, done) => (err, stats) => {
    if (err) {
      throw new gutil.PluginError(taskName, err);
    }
    gutil.log(taskName, stats.toString({
      colors: true,
      assets: false,
      chunks: false
    }));
    done();
  };

gulp.task('ts:compile', false, done => {
  webpackCompiler.run(webpackCallback('ts:compile', done));
});

gulp.task('ts:minify', false, done => {
  webpackConfigFile.output.filename = 'react-vapor.min.js';
  webpackConfigFile.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactDOM', 'Tether', '_']
    }
  }));
  let webpackMinifier = webpack(Object.create(webpackConfigFile));

  webpackMinifier.run(webpackCallback('ts:minify', done));
});

gulp.task('ts:definitions', 'Generate the project definition file', done => {
  runSequence('internalDefs', 'cleanDefs', done)
});

gulp.task('ts', 'Compile Typescript', done => {
  runSequence('ts:compile', 'ts:minify', 'ts:definitions', done);
});

gulp.task('ts:docs', 'Compile docs Typescript', done => {
  webpackDocsCompiler.run(webpackCallback('ts:compile', done));
});
//</editor-fold>

//<editor-fold desc="Typescript d.ts generation">
gulp.task('internalDefs', false, () => {
  return require('dts-generator').default({
    name: 'ReactVapor',
    project: './',
    baseDir: './src/',
    out: 'dist/react-vapor.d.ts',
    exclude: ['lib/**/*.d.ts', 'node_modules/**/*.d.ts', 'types/**/*.d.ts', 'src/Index.ts']
  });
});

gulp.task('cleanDefs', false, () => {
  return gulp.src('dist/react-vapor.d.ts')
    .pipe(replace(/import.*$/gm, ''))
    .pipe(replace(/export .+ from .+$/gm, ''))
    .pipe(replace(/export (?:default )?(.*)$/gm, '$1'))
    .pipe(replace(/private .+;$/gm, ''))
    .pipe(replace(/\t[A-Za-z]+;$/gm, ''))
    .pipe(replace(/\n\t\s*(\n\t\s*)/g, '$1'))
    .pipe(replace(/declare module (.*) {$/gm, 'declare module ReactVapor {'))

    .pipe(footer('declare module "react-vapor" {\n\texport = ReactVapor;\n}'))

    .pipe(gulp.dest('dist'))
});
//</editor-fold>

//<editor-fold desc="Unit tests">
const runTests = (done, singleRun, browser) => {
  new karma({
    configFile: path.resolve('karma.conf.js'),
    browsers: [browser],
    singleRun
  }, done).start();
};

gulp.task('test:single', false, done => {
  runTests(done, true, 'PhantomJS');
});

gulp.task('test:remap', false, () => {
  return gulp.src('./coverage/coverage.json')
    .pipe(remapIstanbul({
      reports: {
        'html': 'coverage/report'
      }
    }));
});

// TODO find out why it's so slow compare to npm test
gulp.task('test', 'Run all tests in PhantomJS and exit', done => {
  runSequence('prettify:tests', 'test:single', 'test:remap', done);
});

gulp.task('test:browser', 'Run all tests in Chrome and watch', done => {
  runTests(done, false, 'Chrome');
});

gulp.task('test:watch', 'Run all tests in PhantomJS and watch', done => {
  runTests(done, false, 'PhantomJS');
});
//</editor-fold>

gulp.task('docs', 'Build the docs project', done => {
  runSequence('clean:docs', 'prettify:docs', 'ts:docs', done);
});

gulp.task('default', 'Clean, prettify and compile the project', done => {
  runSequence('clean:dist', 'prettify:src', 'ts', done);
});
