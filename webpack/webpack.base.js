const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    globalObject: 'this',
    library: 'grace',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../lib'),
    umdNamedDefine: true,
  },
};
