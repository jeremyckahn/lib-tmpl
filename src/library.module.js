// Your library may have many modules.  How you organize the modules is up to
// you, but generally speaking it's best if each module addresses a specific
// concern.  No module should need to know about the implementation details of
// any other module.

// Note:  You must name this function something unique.  If you end up
// copy/pasting this file, the last function defined will clobber the previous
// one.
function initLibraryModule (context) {

  'use strict';

  var Library = context.Library;


  // A library module can do two things to the Library Object:  It can extend
  // the prototype to add more methods, and it can add static properties.  This
  // is useful if your library needs helper methods.


  // PRIVATE MODULE CONSTANTS
  //


  var MODULE_CONSTANT = true;


  // PRIVATE MODULE METHODS
  //


  /**
   *  An example of a private method.  Feel free to remove this.
   */
  function modulePrivateMethod () {
    return;
  }


  // LIBRARY STATIC PROPERTIES
  //


  /**
   * An example of a static Library property.  This particular static property
   * is also an instantiable Object.
   * @constructor
   */
  Library.LibraryHelper = function () {
    return this;
  };


  // LIBRARY PROTOTYPE EXTENSIONS
  //
  // A module can extend the prototype of the Library Object.


  /**
   * An example of a prototype method.
   * @return {string}
   */
  Library.prototype.alternateGetReadOnlyVar = function () {
    // Note that a module can access all of the Library instance variables with
    // the `this` keyword.
    return this._readOnlyVar;
  };


  if (DEBUG) {
    // DEBUG CODE
    //
    // Each module can have its own debugging section.  They all get compiled
    // out of the binary.
  }

}
