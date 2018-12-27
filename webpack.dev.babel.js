import { join } from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.config.babel';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchContentBase: true,
    contentBase: join(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'p5ble',
    }),
  ],
});
