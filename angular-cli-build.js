/* global require, module */

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const compileSass = require('broccoli-sass');
const mergeTrees = require('broccoli-merge-trees');
const _ = require('lodash');
const glob = require('glob');

const compileCSS = require('broccoli-postcss');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

var options =  {
  plugins: [
    {
      module: cssnext,
      options: {
          browsers: ['> 1%'],
          warnForDuplicates: false
      }
    },
    {
      module: cssnano,
      options: {
          safe: true,
          sourcemap: true
      }
    }
  ]
};

module.exports = function(defaults) {
  let appTree = new Angular2App(defaults, {
    sassCompiler: {
        includePaths: [
          'public/styles/css'
        ]
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'angularfire2/**/*.js',
      'firebase/lib/*.js',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/css/bootstrap-theme.min.css',
      'bootstrap/dist/fonts/*.*',
      'bootstrap/dist/js/bootstrap.min.js',
      '@vaadin/**/*.+(js|js.map)'
    ]
  });
  
  let sass = mergeTrees(_.map(glob.sync('public/**/*.scss'), function(sassFile) {
        sassFile = sassFile.replace('public/', '');
        return compileSass(['public'], sassFile, sassFile.replace(/.scss$/, '.css'));
    }));
    
  let css = compileCSS(sass, options);

  return mergeTrees([appTree, sass, css], { overwrite: true })
};
