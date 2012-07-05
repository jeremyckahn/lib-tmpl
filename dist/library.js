/*jslint browser: true, nomen: true, plusplus: true, undef: true, vars: true, white: true */
/**
 * Library Template
 * v0.0.1 (Thu, 05 Jul 2012 16:49:31 GMT)
 *
 * By Jeremy Kahn
 *
 * MIT Lincense.
 */
;(function (global) {
// Compile-time define for UglifyJS.
if (typeof DEBUG === 'undefined') {
  DEBUG = true;
}


// It is recmommended to use strict mode to help make mistakes easier to find.
'use strict';


// LIBRARY-GLOBAL CONSTANTS
//
// These constants are exposed to all library modules.


// GLOBAL is a reference to the global Object.
var Fn = Function, GLOBAL = Fn('return this')();


// LIBRARY-GLOBAL METHODS
//
// The methods here are exposed to all library modules.  Because all of the
// source files are wrapped within a closure at build time, they are not
// exposed globally in the distributable binaries.


/**
 * A no-op function.  Useful for passing around as a default callback.
 */
function noop () { }


/**
 * @param {Object} The Object that the library gets attached to in
 * library.init.js.  If the library was not loaded with an AMD loader such as
 * require.js, this is the global Object.
 */
function libraryCore (context) {


  // PRIVATE MODULE CONSTANTS
  //


  // An example of a CONSTANT variable;
  var CORE_CONSTANT = true;


  // PRIVATE MODULE METHODS
  //
  // These do not get attached to the prototype of the method.  They are
  // private utility functions.


  /**
   *  An example of a private method.  Feel free to remove this.
   *  @param {number} aNumber This is a parameter description.
   *  @returns {number} This is a return value description.
   */
  function corePrivateMethod (aNumber) {
    return aNumber;
  }


  /**
   * This is the constructor for the Library function.  Please rename it to
   * whatever your library's name is.  Note that the constructor is also being
   * attached to the context that the library was loaded in.
   * @param {Object} opt_config Contains any properties that should be used to
   * configure this instance of the library.
   * @constructor
   */
  var Library = context.Library = function (opt_config) {

    opt_config = opt_config || {};

    // INSTANCE PROPERTY SETUP
    //
    // Your library likely has some instance-specific properties.  The value of
    // these properties can depend on any number of things, such as properties
    // passed in via opt_config or global state.  Whatever the case, the value
    // should be set in this constructor.

    // Instance variables that have an underscore prepended mean that should
    // not be modified outside of the library.  They can be freely modified by
    // library methods, however.  If an instance variable will likely be
    // accessed outside of the library, consider making a public getter
    // function for it.
    this._readOnlyVar = 'read only';

    // Instance variables that do not have an underscore prepended are
    // considered to be part of the library's public API.  External code may
    // change the value of these variables freely.
    this.readAndWrite = 'read and write';

    return this;
  }


  // LIBRARY PROTOTYPE METHODS
  //
  // These methods define the public API.


  /**
   * An example of a protoype method.
   * @return {string}
   */
  Library.prototype.getReadOnlyVar = function () {
    return this._readOnlyVar;
  };


  /**
   * This is an example of a chainable method.  That means that the return
   * value of this function is the library instance itself.  Chaining lets you
   * do chained method calls like this:
   *
   * var myLibrary = new Library();
   * myLibrary
   *   .chainableMethod()
   *   .chainableMethod();
   *
   * @return {Library}
   */
  Library.prototype.chainableMethod = function () {
    return this;
  };


  // DEBUGGING CODE
  //
  // With compile-time defines, you can wrap code in a conditional check to
  // ensure that it does not get included in the compiled binaries.  This is
  // useful for exposing certain properties and methods that are needed during
  // development and testing, but should be private in the compiled binaries.


  if (DEBUG) {
    GLOBAL.corePrivateMethod = corePrivateMethod;
  }

}
// Your library may have many modules.  How you organize the modules is up to
// you, but generally speaking it's best if each module addresses a specific
// concern.  No module should know about the API or implementation of any other
// module.  Non-core modules can assume the core module's API and
// implementation, but that is the only exception.

// Note:  You should name this module something unique.  If you end up
// copy/pasting this file, the last function defined will clobber the previous
// one.
function libraryModule (context) {

  var Library = context.Library;


  // A library module can do two things.  First, it extends the prototype of
  // the main Library function to add more methods.  Second, it can add static
  // properties to the Library Object.  This is useful if your library needs
  // multiple "Class" types.


  // PRIVATE MODULE CONSTANTS
  //


  // An example of a CONSTANT variable.
  var MODULE_CONSTANT = true;


  // PRIVATE MODULE METHODS
  //
  // These do not get attached to the prototype of the method.  They are
  // private utility functions.


  /**
   *  An example of a private method.  Feel free to remove this.
   */
  function modulePrivateMethod () {
    return;
  }


  // LIBRARY STATIC PROPERTIES
  //


  /**
   * An example of a static Library property.  This particular  static property
   * is also a base Object.  What static properties you use are up to you.
   * @constructor
   */
  Library.LibraryHelper = function () {
    return this;
  };


  // LIBRARY PROTOTYPE EXTENSIONS
  //
  // A module works by extending the prototype of the Library Object.


  /**
   * An example of a protoype method.
   * @return {string}
   */
  Library.prototype.alternateGetReadOnlyVar = function () {
    // Note that a module can access all of the Library instance variables with
    // the `this` keyword.
    return this._readOnlyVar;
  };


  // DEBUGGING CODE
  //
  // Each module can have its own debugging section.  They all get compiled out
  // of the binary anyways.


  if (DEBUG) {

  }

}
var initLibrary = function (global, loadedViaAMD) {

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
  // The initLibrary module is anonymous so that it can be required with any
  // name.  Example: define(['lib/library.min'], function(Library) { ... });
  define(function (Tweenable, Underscore) {
    return initLibrary(global, true);
  });
} else {
  // Load Library normally (creating a Library global) if not using an AMD
  // loader.

  // Note: `global` is not defined when running unit tests. Pass `this`
  // instead.
  initLibrary(typeof global !== 'undefined' ? global : this);
}
} (this));
