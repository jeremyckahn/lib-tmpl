# JavaScript Library Template

This is meant to serve as a foundation to build JavaScript libraries on top of.
Exactly how a JavaScript library is structured isn't standardized, so this
project aims to define an opinionated pattern for organizing, building, and
testing code.

Don't be afraid to change any code or conventions in this project, it's simply
an educational project tool meant to give direction when writing JavaScript
libraries.

I created this skeleton project out of what I learned with my projects
[Rekapi](https://github.com/jeremyckahn/rekapi) and
[Shifty](https://github.com/jeremyckahn/shifty).  The build script is an
modification of a script written by Miller Medeiros.  The module pattern and
AMD compatibility code is inspired by the work of Franck Lecollinet.

## What this project gives you

  * A scalable, defensive pattern
  * Clearly defined directory structure
  * Module templates
  * Basic build process
  * Testing template (with [Qunit](https://github.com/jquery/qunit))
  * AMD compatibility
  * Compiler directives for customizing binaries

## A scalable, defensive pattern

There are a lot of small things you can do maximze compatiblity and minimize
headaches.  This template takes care of a lot of this work for you.  Only one
global symbol is exposed (none are exposed if it is loaded as an AMD module),
a clear convention for managing private and public APIs is provided, and
JavaScript Strict Mode is enabled by default.

## Clearly defined directory structure

Each directory has a README that explains what its purpose is.

## Module templates

As your library grows, it helps to separate code into files.  This serves to
keep large amounts of code manageable, and it also makes collaboration easier
by mitigating merge conflicts.  A project must have one core module, and any
number of additional modules.  Modules should be organized by the problem they
are trying to solve.  For instance, if you have a set of methods that do DOM
manipulation, those should be isolated into a single module.

## Basic build process

## Testing template

## AMD compatibility

## Compiler directives for customizing binaries
