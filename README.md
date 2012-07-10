# JavaScript Library Template

This is meant to serve as a foundation to build JavaScript libraries on top of.
Exactly how a JavaScript library is structured isn't standardized, so this
project aims to define an opinionated pattern for organizing, building, and
testing code.  __If you are writing a JavaScript library and need a starting
point, this is a good option.__

Don't be afraid to change any code or conventions in this project, it's simply
an educational tool meant to give direction when writing JavaScript libraries.

I created this skeleton project out of what I learned with my projects
[Rekapi](https://github.com/jeremyckahn/rekapi) and
[Shifty](https://github.com/jeremyckahn/shifty).  The build script is a
modification of a script written by [Miller
Medeiros](https://github.com/millermedeiros).  The module pattern and AMD
compatibility code is inspired by the work of [Franck
Lecollinet](https://github.com/sork).

## Setting it up

This project uses [NodeJS](http://nodejs.org/) for the build process, and you
need to install [UglifyJS](https://github.com/mishoo/UglifyJS) and
[Commander](https://github.com/visionmedia/commander.js).  Just do this at the
CLI:

````
$ cd lib-tmpl
$ npm install
````

## What this project gives you

  * A scalable, defensive pattern
  * Clearly defined directory structure
  * Module templates
  * Basic build process
  * Compiler directives for customizing binaries
  * Testing template
  * AMD compatibility

### A scalable, defensive pattern

There are a lot of small things you can do maximize compatibility and minimize
headaches.  This template takes care of a lot of this work for you.  Only one
global symbol is exposed (none are exposed if it is loaded as an AMD module),
a clear convention for managing private and public APIs is provided, and
JavaScript Strict Mode is enabled by default.

### Clearly defined directory structure

Each directory has a README that explains what its purpose is.

### Module templates

As your library grows, it helps to separate code into files.  This serves to
keep large amounts of code manageable, and it also makes collaboration easier
by mitigating merge conflicts.  A project must have one core module, and any
number of additional modules.  Modules should be organized by the task they
perform.  For instance, if you have a set of methods that do DOM manipulation,
those should be isolated into a single module.

### Basic build process

Compiled code loads and runs faster than uncompiled code.  This template gives
you `build.js`, a build script that you can easily extend and modify.  The
build process uses [UglifyJS](https://github.com/mishoo/UglifyJS), which
requires Node to be installed on your system.

Building this project on the CLI is really easy:

````
$: node build.js --ver <BUILD_VERSION>
````

Where `BUILD_VERSION` is the version number for the binary.  It is strongly
recommended that you use [SemVer](http://semver.org/) for your versioning.

### Compiler directives for customizing binaries

UglifyJS has a great feature: [Compiler
directives](https://github.com/mishoo/UglifyJS#use-as-a-code-pre-processor).
Compiler directives allow you to mark sections of code that should not be
included in the compiled binary.  This has a number of benefits, not least of
which is exposing private functions and variables only during development and
testing.  This template provides sections to place code that get removed at
compile-time.

### Testing template

A good library is thoroughly unit tested.  There are number of ways to unit
test your code, and you are free to use whatever framework or approach you
prefer.  For convenience, [Qunit](https://github.com/jquery/qunit) is included
by default.  Also provided are basic test skeletons for API and AMD tests.

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
actual name of your library, rather than the generic "library."

Don't forget to update `src/library.license.js` to reflect you and your
project!

## Adding modules

You can add modules to this library.  You can think of `src/library.module.js`
as a generic module template.  Simply copy that file and modify as needed.  To
initialize the module, add its `init` wrapper function to `src/library.init.js`
(there's a note in the comments where to do this).  To add the module to the
build script, add the file to `CORE_FILE_LIST`.  Make sure to reference it in
any test files, such as `test/test.library.html`.
