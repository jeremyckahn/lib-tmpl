var library = function (global, loadedViaAMD) {

  // Prevent Library from being attached to the global Object if it was loaded
  // via an AMD loader.
  var context = loadedViaAMD ? {} : global;

  libraryCore(context);
  libraryModule(context);
  // Add a similar line as above for each module that you have.  If you have a
  // module named "Awesome module," it should live in the file
  // "src/library.awesome-module.js" with a wrapper function named
  // "awesomeModule".  That function should then be invoked here with:
  //
  // awesomeModule(context);

  return context.Library;
};


if (typeof define === 'function' && define.amd) {
  var underscoreAlreadyInUse = (typeof _ !== 'undefined');

  // Expose Library as an AMD module if it's loaded with RequireJS or similar.
  //
  // The library module is anonymous so that it can be required with any name.
  // Example: define(['lib/library.min'], function(Library) { ... });
  define(function (Tweenable, Underscore) {
    return library(global, true);
  });
} else {
  // Load Library normally (creating a Library global) if not using an AMD
  // loader.

  // Note: `global` is not defined when running unit tests. Pass `this`
  // instead.
  library(typeof global !== 'undefined' ? global : this);
}
