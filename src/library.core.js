// It is recmommended to use strict mode to help make mistakes easier to find.
'use strict';


// LIBRARY-GLOBAL METHODS AND PROPERTIES
//
// The methods here are exposed to all library modules.  Because all of the
// source files are wrapped within a closure at build time, they are not
// exposed globally in the distributable binaries.


// compile-time define for UglifyJS
if (typeof DEBUG === 'undefined') {
  var DEBUG = true;
}

// GLOBAL is read from for various environment properties.  It should not be
// written to.
var Fn = Function, GLOBAL = Fn('return this')();


/**
 * A no-op function.  Useful for passing around as a default callback.
 */
function noop () { }


function libraryCore (context) {

}
