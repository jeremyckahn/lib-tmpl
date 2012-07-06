// Your library may have many modules.  How you organize the modules is up to
// you, but generally speaking it's best if each module addresses a specific
// concern.  No module should know about the API or implementation of any other
// module.  Non-core modules can assume the core module's API and
// implementation, but that is the only exception.

// Note:  You must name this module something unique.  If you end up
// copy/pasting this file, the last function defined will clobber the previous
// one.
function initLibraryModule (context) {

  var Library = context.Library;


  // A library module can do two things:  It can extend the prototype of the
  // Library Object to add more methods.  It can also add static properties to
  // the Library Object.  This is useful if your library needs helper Objects.


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
   * is also an instantiable Object.  What static properties you use are up to
   * you.
   * @constructor
   */
  Library.LibraryHelper = function () {
    return this;
  };


  // LIBRARY PROTOTYPE EXTENSIONS
  //
  // A module can extend the prototype of the Library Object.


  /**
   * An example of a protoype method.
   * @return {string}
   */
  Library.prototype.alternateGetReadOnlyVar = function () {
    // Note that a module can access all of the Library instance variables with
    // the `this` keyword.
    return this._readOnlyVar;
  };


  // DEBUG CODE
  //
  // Each module can have its own debugging section.  They all get compiled out
  // of the binary.


  if (DEBUG) {

  }

}
