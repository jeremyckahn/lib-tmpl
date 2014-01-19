/**
 * Submodules are similar to modules, only they do not use the same namespace as 
 * the Core, but defined a sub-namespace of their own.
 * @param {Object} The Object that the library gets attached to in
 * library.init.js.  If the library was not loaded with an AMD loader such as
 * require.js, this is the global Object.
 */
function initLibrarySubmodule (context) {
  'use strict';

  var Library = context.Library;

  /*
   * The submodule constructor
   * @param {Object} opt_config Contains any properties that should be used to
   * configure this instance of the library.
   * @constructor
   */
  var submodule = Library.Submodule = function(opt_config) {
    
    // defines a temporary variable, 
    // living only as long as the constructor runs.
    var constructorVariable = "Constructor Variable";
    
    // set an instance variable
    // will be available after constructor has run. 
    this.instanceVariable = null;

    // an optional call to the private method
    // at the end of the construction process
    this._privateMethod(constructorVariable);
  };

  // LIBRARY PROTOTYPE EXTENSIONS
  /**
   * A public method of the submodule
   * @param {object} a variable to be set to the instance variable
   * @returns {object} the final value of the instance variable
   */
  submodule.prototype.publicMethod = function(value){
    if (value !== undefined) {
      this._privateMethod(value);
    }

    return this.instanceVariable;
  };

  /** 
   * a private instance method
   * @param {object} a variable to be set to the instance variable
   * @returns {object} the final value of the instance variable
   */
  submodule.prototype._privateMethod = function(value){
    return this.instanceVariable = value;
  };
}