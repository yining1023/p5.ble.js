import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: ['idempotent-babel-polyfill', './src/p5.ble.js'],
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    filename: 'p5.ble.js',
    library: 'p5ble',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json',
        include,
      },
    ],
  },
};
