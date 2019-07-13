module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
      },
    ],
    '@babel/react',
  ],
  env: {
    test: {
      presets: [],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs',
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
  plugins: [
    'emotion',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/plugin-transform-react-jsx-self',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-syntax-class-properties',
  ],
};
