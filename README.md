# JavaScript Library Template

This is meant to serve as a foundation to build JavaScript libraries on top of.
Exactly how a JavaScript library is structured isn't standardized, so this
project aims to define an opinionated pattern for organizing, building, and
testing code.  __If want to write a JavaScript library and need a starting
point, this is a good option.__

[Here's a video](http://www.youtube.com/watch?v=OGZB7lq9-Mk) explaining the
ideas and motivation behind lib-tmpl.

Don't be afraid to change any code or conventions in this project, it's simply
an educational tool meant to give direction when writing JavaScript libraries.

I created this skeleton project out of what I learned with my projects
[Rekapi](https://github.com/jeremyckahn/rekapi) and
[Shifty](https://github.com/jeremyckahn/shifty).  It is also heavily inspired
by other projects such as jQuery.  The module pattern and AMD compatibility
code is an abstraction of the work of [Franck
Lecollinet](https://github.com/sork).

## Setting it up

This project uses [NodeJS](http://nodejs.org/) and [Grunt](http://gruntjs.com/)
for the build process.  Assuming you have Node and npm set up (npm is installed
when Node in installed), you can just do this at the CLI in the lib-tmpl
directory:

````
$: npm install
````

## What this project gives you

  * [A scalable, unobtrusive module pattern](#a-scalable-unobtrusive-pattern)
  * [Module templates](#module-templates)
  * [A directory structure](#a-directory-structure)
  * [A build process (via Grunt)](#a-build-process-via-grunt)
  * [Conditional compilation for customizing
    binaries](https://github.com/jeremyckahn/lib-tmpl/tree/grunt#conditional-compilation-for-customizing-binaries)
  * [Testing bootstrap](#testing-bootstrap)
  * [JSHint boilerplate](#jshint-boilerplate)
  * [AMD compatibility](#amd-compatibility)

### A scalable, unobtrusive pattern

There are a lot of small things you can do maximize compatibility and minimize
headaches.  This template has a lot of this baked in.  Only one global symbol
is exposed (none are exposed if it is loaded as an AMD module), a clear
convention for managing private and public APIs is provided, and JavaScript
Strict Mode is enabled by default.

### Module templates

As your library grows, it helps to separate code into files.  This serves to
keep large amounts of code manageable, and it also makes collaboration easier
by mitigating merge conflicts.  A lib-tmpl library  must have one core module,
and any number of additional modules.  Modules should be organized by the task
they perform.  For instance, if you have a set of methods that do DOM
manipulation, those should be isolated into a single module.

### A directory structure

Each directory has a README that explains what its purpose is.

### A build process (via Grunt)

Compiled code loads and runs faster than uncompiled code.  lib-tmpl provides
concatenation and minification via Grunt (see `Gruntfile.js`).  Feel free to
modify this configuration to suit your needs.  The default configuration
creates the production-ready `dist/library.min.js` and debug-friendly
`dist/library.js` files.  Building this project via the CLI is really easy:

````
$: grunt build
````

### Conditional compilation for customizing binaries

UglifyJS has a great feature: [Conditional
compilation](https://github.com/mishoo/UglifyJS2#conditional-compilation).
Conditional compilation allows you to mark sections of code that should not be
included in the compiled binary.  This has a number of benefits, not least of
which is exposing private functions and variables only during development and
testing.  This template provides sections to place code that get removed during
compilation.  The flag `DEBUG` is included and set up out of the box.  See the
notes in `src/library.const.js` for more info on how to add more.

### Testing bootstrap

A good library is thoroughly unit tested.  There are number of ways to unit
test your code, and you are free to use whatever framework or approach you
prefer.  lib-tmpl provides basic test skeletons for API and AMD tests via
[QUnit](http://qunitjs.com/).

To run the tests, you can either open each of the `test/qunit.*.html` pages in
your browser, or run them all in the CLI (requires
[PhantomJS](http://phantomjs.org/) to be installed). The `qunit` Grunt task
automates this for you:

````
$: grunt qunit
````

### JSHint boilerplate

[JSHint](http://jshint.com/) is a tool that helps ensure code quality.
lib-tmpl provides some default settings in `.jshintrc` - feel free to customize
it.  To lint all of the source files, run this:

````
$: grunt jshint
````

### AMD compatibility

[AMD (Asynchronous Module
Definition)](https://github.com/amdjs/amdjs-api/wiki/AMD) defines a way by
which to load code.  You don't have to use it, but it's a great development
tool and helps prevent pollution of the global scope.  This template is
compatible with AMD loaders, such as
[RequireJS](https://github.com/jrburke/requirejs) (which is included by
default).  You can also safely load the code with a standard `<script>` element
with no side effects.

## Building on top of this template

If you choose to use this template to build your libraries on top of, you
should first change the name of the library.  It is called "Library" by
default.  You'll need to change the name of the constructor (in
`src/library.core.js`) and all references to that constructor in the code and
comments.  It's also a good idea to change the file names to reference the
actual name of your library, rather than the generic "library." In other words,
you should change `src/library.core.js` to something like
`src/my-awesome-tool.core.js`.

The naming convention for the files in `src/` is significant:

````
<LIBRARY_NAME>.<MODULE_NAME>.js
````

When you change the name of the library and the prefix of the files in `src/`,
you will also need to update the value of `LIBRARY_NAME` in `Guntfile.js`.  As
you add module files in `src/`, you will also need to add them to
`MODULE_LIST`, also in `Gruntfile.js`.  The areas you need to modify
(`LIBRARY_NAME` and `MODULE_LIST`) are called out in the comments.

Don't forget to update `package.json` (for [npm](https://npmjs.org/)) and
`component.json` (for [Bower](http://twitter.github.com/bower/)) to reflect you
and your project!

## More on adding module files

You can add modules to this library.  You can think of `src/library.module.js`
as a generic module template.  Simply copy that file and modify as needed.  To
initialize the module, add its `init` wrapper function to `src/library.init.js`
(there's a note in the comments where to do this).

## Roadmap

Admittedly, building on top of and extending lib-tmpl is somewhat
labor-intensive.  Eventually I'd like to write generators for creating and
linking modules automatically.
