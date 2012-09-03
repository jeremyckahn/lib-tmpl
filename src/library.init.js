var initLibrary = function (global, loadedViaAMD) {

  // Prevent Library from being attached to the global Object if it was loaded
  // via an AMD loader.
  var context = loadedViaAMD ? {} : global;

  initLibraryCore(context);
  initLibraryModule(context);
  // Add a similar line as above for each module that you have.  If you have a
  // module named "Awesome module," it should live in the file
  // "src/library.awesome-module.js" with a wrapper function named
  // "initAwesomeModule".  That function should then be invoked here with:
  //
  // initAwesomeModule(context);

  return context.Library;
};


if (typeof define === 'function' && define.amd) {
  // Expose Library as an AMD module if it's loaded with RequireJS or similar.
  //
  // The initLibrary module is anonymous so that it can be required with any
  // name.  Example: define(['lib/library.min'], function(Library) { ... });
  define(function () {
    return initLibrary(global, true);
  });
} else {
  // Load Library normally (creating a Library global) if not using an AMD
  // loader.

  // Note: `global` is not defined when running unit tests. Pass `this`
  // instead.
  initLibrary(typeof global !== 'undefined' ? global : this);
}
