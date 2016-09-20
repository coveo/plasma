'use strict';

const del = require('del');
const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const insert = require('gulp-insert');
const merge = require('merge-stream');
const prettyTypescript = require('pretty-typescript');
const replace = require('gulp-replace');
const runSequence = require('gulp-sequence');
const tsconfig = require('tsconfig-glob');
const webpack = require('webpack');

const environment = gutil.env.env || 'local';
const isProduction = environment == 'production';

const webpackDevConfig = Object.create(require('./webpack.config'));
const webpackProdConfig = Object.create(require('./webpack.prod.config.js'));

let webpackCompiler = webpack(isProduction ? webpackProdConfig : webpackDevConfig);

//<editor-fold desc="Dev tools">
gulp.task('clean', 'Clean project outputs', done => {
  const toDelete = [];
  isProduction ? toDelete.push('dist') : toDelete.push('docs/assets');

  del(toDelete, {force: true}).then(deletedFiles => {
    gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
    done();
  });
});

gulp.task('prettify', 'Run the pretty Typescript plugin', () => {
  let src = gulp.src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(prettyTypescript())
    .pipe(gulp.dest('src'));
  let docs = gulp.src(['docs/**/*.ts', 'docs/**/*.tsx'])
    .pipe(prettyTypescript())
    .pipe(gulp.dest('docs'));
  return merge(src, docs);
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

gulp.task('ts:compile', false, done => {
  webpackCompiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('ts:webpack', err);
    }
    gutil.log('ts:webpack', stats.toString({
      colors: true,
      assets: false,
      chunks: false
    }));
    done();
  });
});

gulp.task('ts:definitions', 'Generate the project definition file', done => {
  if (isProduction) {
    runSequence('internalDefs', 'cleanDefs', done)
  } else {
    done();
  }
});

gulp.task('ts', 'Compile Typescript', ['ts:add-file'], done => {
  runSequence('ts:compile', 'ts:definitions', done);
});
//</editor-fold>

//<editor-fold desc="Typescript d.ts generation">
gulp.task('internalDefs', false, () => {
  return require('dts-generator').default({
    name: 'ReactVapor',
    project: './',
    baseDir: './src/',
    out: 'dist/ReactVapor.d.ts',
    exclude: ['lib/**/*.d.ts', 'node_modules/**/*.d.ts', 'typings/**/*.d.ts', 'src/Index.ts']
  });
});

gulp.task('cleanDefs', false, () => {
  return gulp.src('dist/ReactVapor.d.ts')
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

gulp.task('default', 'Clean, prettify and compile the project', done => {
  runSequence('clean', 'prettify', 'ts', done);
});
