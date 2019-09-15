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
  env => Object.assign(config2, {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-maps' : 'eval',
    target: 'web',
  }),
  env => Object.assign(config, {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-maps' : 'eval',
    target: 'node',
  }),
];
