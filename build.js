// This script is inspired by the build script for Shifty, which was written by
// Miller Medeiros.

// --- SETTINGS --- //

var
  DIST_NAME = 'library',
  DIST_FOLDER = 'dist',
  replacements = {
    'version' : null,
    'build_date' : (new Date()).toGMTString()
  },
  HEAD_FILE_LIST = [
    'src/library.license.js',
    'src/library.intro.js'],
  CORE_FILE_LIST = [
    // Add your modules to this list after core.
    'src/library.core.js',
    'src/library.module.js'],
  TAIL_FILE_LIST = [
    'src/library.init.js',
    'src/library.outro.js'];


// --- SETUP --- //

var
  _cli = require('commander'),
  _fs = require('fs'),
  _path = require('path'),
  _exec = require('child_process').exec,
  _distBaseName = _path.join(__dirname, DIST_FOLDER, DIST_NAME),
  _distFileName = _distBaseName + '.js',
  _distFileNameMin = _distBaseName + '.min.js';

_cli
  .version('0.1.0')
  .option('--ver <build version>',
      'A string representing the semver build version to record in the source (eg. 5.0.2)')
  .parse(process.argv);


// --- HELPERS --- //

/**
 * Parse string and replace tokens delimited with '{{}}' with object data.
 * @param {string} template String containing {{tokens}}.
 * @param {object} data Object containing replacement values.
 */
function stache(template, data){
  function replaceFn(match, prop){
      return (prop in data)? data[prop] : '';
  }
  return template.replace(/\{\{(\w+)\}\}/g, replaceFn);
}


function contains(arr, val) {
  return arr.indexOf(val) !== -1;
}


function echoFileSize(filename, explanatoryString) {
  //should be called only after minification completed
  _exec(
    'cat '+ filename +' | gzip -9f | wc -c',
    function (error, stdout, stderr) {
      if (error) {
        console.log(stderr);
      } else {
        console.log(explanatoryString);
        console.log('   The file size, minified and gzipped, is: '
          + (stdout + '').replace(/[\s\n]/g, '') + ' bytes.');
      }
    }
  );
}


// ---  CONCAT --- //

function getFileList() {
  var files = HEAD_FILE_LIST.slice(0);
  files = files.concat(CORE_FILE_LIST);
  files = files.concat(TAIL_FILE_LIST);

  return files;
}

function concatFiles(fileList) {
  var out = fileList.map(function(filePath){
    return _fs.readFileSync(filePath);
  });
  return out.join('');
}

if (! _cli.ver ) {
  console.log('   ERROR: Please provide a version number (with "--ver").');
  process.exit(1); //exit with error
}

replacements.version = _cli.ver;
_fs.writeFileSync(_distFileName,
    stache(concatFiles(getFileList()), replacements));


// --- MINIFICATION ---- //

function getLicense(){
  var srcLicense = _fs.readFileSync('src/library.license.js', 'utf-8');
  return stache(srcLicense, replacements);
}

var
  uglifyJS = require('uglify-js'),
  jsp = uglifyJS.parser,
  pro = uglifyJS.uglify,
  ast = jsp.parse( _fs.readFileSync(_distFileName, 'utf-8') );

ast = pro.ast_mangle(ast, {
    'defines': {
      'DEBUG': ['name', false ]
    }
  });
ast = pro.ast_squeeze(ast);

_fs.writeFileSync(_distFileNameMin, getLicense() + pro.gen_code(ast) );

echoFileSize(_distFileNameMin, '   Yay!  Library was built.');


// --- VERSIONING --- //

_exec('echo ' + replacements.version + ' > version.txt');
