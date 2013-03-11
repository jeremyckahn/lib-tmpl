// This file is used in the build process to enable or disable features in the
// compiled binary.  Here's how it works:  If you have a const defined like so:
//
//   const MY_AWESOME_FEATURE_IS_ENABLED = false;
//
// ...And the compiler (UglifyJS) sees this in your code:
//
//   if (MY_AWESOME_FEATURE_IS_ENABLED) {
//     doSomeStuff();
//   }
//
// ...Then the if statement (and everything in it) is removed - it is
// considered dead code.  If it's set to a truthy value:
//
//   const MY_AWESOME_FEATURE_IS_ENABLED = true;
//
// ...Then the compiler leaves the if (and everything in it) alone.

const DEBUG = false;

// If you add more consts here, you need to initialize them in library.core.js
// to true.  So if you add:
//
//   const MY_AWESOME_FEATURE_IS_ENABLED = /* any value */;
//
// Then in library.core.js you need to add:
//
//   if (typeof MY_AWESOME_FEATURE_IS_ENABLED === 'undefined') {
//     MY_AWESOME_FEATURE_IS_ENABLED = true;
//   }
