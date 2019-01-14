const path = require('path');

const config = {
  entry: './lib/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    library: 'emotion-react-bootstrap',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [],
};

const config2 = {
  entry: './lib/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.web.js',
  },
  module: {
    rules: [{ test: /.js$/, use: 'babel-loader' }],
  },
};

module.exports = [
  (env, argv) => {
    const mods = { target: 'web' };
    if (argv.mode === 'production') {
      mods.mode = 'production';
    } else {
      mods.devtool = 'source-map';
    }
    return Object.assign({}, config2, mods);
  },
  (env, argv) => {
    const mods = {
      target: 'node',
    };
    if (argv.mode === 'production') {
      mods.mode = 'production';
    } else {
      mods.devtool = 'source-map';
    }
    return Object.assign({}, config, mods);
  },
];
