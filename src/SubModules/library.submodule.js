/**
*  Sub Modules are similar to modules, only they do not use the same namespace as 
*  the Core, but defined a sub-namespace of their own.
*/
function initLibrarySubModule (context) {
	'use strict';

	var Library = context.Library;

	// The SubModule constructor
	var SubModule = Library.SubModule = function(opt_config) {
		
		// defines a temporary variable, 
		// living only as long as the constructor runs.
		var ConstructorVariable = "Constructor Variable";
		
		// set an instance variable
		// will be available after constructor has run. 
		this.InstanceVariable = undefined;

		// a private instance method
		this.privateMethod = function(value){
			this.InstanceVariable = value;
		};

		// an optional call to the private method
		// at the end of the construction process
		this.privateMethod(ConstructorVariable);
	};

	// LIBRARY PROTOTYPE EXTENSIONS
	SubModule.prototype.publicMethod = function(value){
		if (value !== undefined) {
			this.privateMethod(value);
		}

		return this.InstanceVariable;
	};
}