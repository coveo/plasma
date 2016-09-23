'use strict';

const del = require('del');
const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const insert = require('gulp-insert');
const karma = require('karma').Server;
const merge = require('merge-stream');
const path = require('path');
const prettyTypescript = require('pretty-typescript');
const replace = require('gulp-replace');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const runSequence = require('gulp-sequence');
const tsconfig = require('tsconfig-glob');
const webpack = require('webpack');

let webpackConfigFile = require('./webpack.config.prod.js');
let webpackDocsConfigFile = require('./webpack.config');

let webpackCompiler = webpack(Object.create(webpackConfigFile));
let webpackDocsCompiler = webpack(Object.create(webpackDocsConfigFile));

//<editor-fold desc="Dev tools">
gulp.task('clean', 'Clean the dist folder', done => {
  del(['dist'], {force: true}).then(deletedFiles => {
    gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
    done();
  });
});

gulp.task('clean:docs', 'Clean the docs/assets folder', done => {
  del(['docs/assets'], {force: true}).then(deletedFiles => {
    gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
    done();
  });
});

gulp.task('prettify', 'Run the pretty Typescript plugin', () => {
  return gulp.src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(prettyTypescript())
    .pipe(gulp.dest('src'));
});

gulp.task('prettify:docs', 'Run the pretty Typescript plugin on docs', () => {
  return gulp.src(['docs/**/*.ts', 'docs/**/*.tsx'])
    .pipe(prettyTypescript())
    .pipe(gulp.dest('docs'));
});

gulp.task('prettify:tests', 'Run the pretty Typescript plugin on tests', () => {
  return gulp.src(['tests/**/*.ts', 'tests/**/*.tsx'])
    .pipe(prettyTypescript())
    .pipe(gulp.dest('tests'));
});
//</editor-fold>

//<editor-fold desc="Typescript compilation">
gulp.task('ts:add-file', false, done => {
  tsconfig({
    configPath: '.',
    cwd: './',
    indent: 2
  }, () => {
    done();
  });
});

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

gulp.task('ts', 'Compile Typescript', ['ts:add-file'], done => {
  runSequence('ts:compile', 'ts:minify', 'ts:definitions', done);
});

gulp.task('ts:docs', 'Compile docs Typescript', ['ts:add-file'], done => {
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
    exclude: ['lib/**/*.d.ts', 'node_modules/**/*.d.ts', 'typings/**/*.d.ts', 'src/Index.ts']
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

    .pipe(insert.append('declare module "react-vapor" {\n\texport = ReactVapor;\n}'))

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
  runSequence('test:single', 'test:remap', done);
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
  runSequence('clean', 'prettify', 'ts', done);
});
