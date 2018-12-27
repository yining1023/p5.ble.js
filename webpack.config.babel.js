import {
  join
} from "path";

const include = join(__dirname, 'src')

export default {
  entry: "./src/index.js",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "p5ble"
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      use: "babel-loader"
    }]
  }
};
