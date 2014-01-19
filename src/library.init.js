/*global initLibraryCore initLibraryModule initLibrarySubmodule */
var initLibrary = function (context) {

  initLibraryCore(context);
  initLibraryModule(context);
  initLibrarySubmodule(context);
  // Add a similar line as above for each module that you have.  If you have a
  // module named "Awesome Module," it should live in the file
  // "src/library.awesome-module.js" with a wrapper function named
  // "initAwesomeModule".  That function should then be invoked here with:
  //
  // initAwesomeModule(context);

  return context.Library;
};


if (typeof define === 'function' && define.amd) {
  // Expose Library as an AMD module if it's loaded with RequireJS or
  // similar.
  define(function () {
    return initLibrary({});
  });
} else {
  // Load Library normally (creating a Library global) if not using an AMD
  // loader.
  initLibrary(this);
}
