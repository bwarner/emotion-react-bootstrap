module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
};
