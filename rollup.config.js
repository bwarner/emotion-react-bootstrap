// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
// import external-helpers from 'external-helpers';
import babelrc from 'babelrc-rollup';

export default {
  input: 'lib/index.js',
  output: {
    name: 'emotion-react-bootstrap',
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      // use 'module' field for ES6 module if possible
      // module: true, // Default: true
      // use 'jsnext:main' if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      // jsnext: true,  // Default: false
      // whether to prefer built-in modules (e.g. `fs`, `path`) or
      // local ones with the same names
      // preferBuiltins: false,  // Default: true
      // Set to an array of strings and/or regexps to lock the module search
      // to modules that match at least one entry. Modules not matching any
      // entry will be marked as external
      // only: [ 'some_module', /^@some_scope\/.*$/ ], // Default: null
      // If true, inspect resolved files to check that they are
      // ES2015 modules
      // modulesOnly: true, // Default: false
      // Any additional options that should be passed through
      // to node-resolve
      // customResolveOptions: {
      //  moduleDirectory: 'js_modules'
      // }
    }),
    babel(babelrc),
  ],
};
