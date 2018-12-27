## Getting Started

If you want to help develop this library, here are the steps to get started:

1. Fork the repository to your account, and then clone it your computer:
  ```bash
  git clone https://github.com/YOURGITHUBHANDLE/p5.ble.js.git
  ```

2. Install dependencies:

  ```bash
  cd p5.ble.js
  npm install
  ```

3. This project is developed using [Webpack](https://webpack.js.org/). Webpack is a module bundler that "bundles" different files into one file. This file is usually called a library.

  Under the `/src` folder there are sub-folders for all `p5ble` methods. Before building the library, you can check to see everything is working:

  - Run this command from the root of the project:
    ```bash
    npm run start
    ```

    That should output something similar to this:

    ```bash
    > p5ble@0.0.2 start /Users/yiningshi/dev/p5.ble.js
    > webpack-dev-server --mode development --config webpack.dev.babel.js

    ℹ ｢wds｣: Project is running at http://localhost:8080/
    ℹ ｢wds｣: webpack output is served from /
    ℹ ｢wds｣: Content not from webpack is served from /Users/yiningshi/dev/p5.ble.js/dist
    ℹ ｢wdm｣: Hash: 93398258fad8f6aeebb2
    Version: webpack 4.28.2
    Time: 2108ms
    Built at: 2018-12-27 12:48:54
        Asset       Size  Chunks             Chunk Names
    index.html  177 bytes          [emitted]
    p5.ble.js    1.7 MiB    main  [emitted]  main
    Entrypoint main = p5.ble.js
    [0] multi (webpack)-dev-server/client?http://localhost:8080 babel-polyfill ./src/p5.ble.js 52 bytes {main} [built]
    [./node_modules/babel-polyfill/lib/index.js] 833 bytes {main} [built]
    [./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js]23.9 KiB {main} [built]
    [./node_modules/core-js/fn/regexp/escape.js] 108 bytes {main} [built]
    [./node_modules/core-js/shim.js] 8.03 KiB {main} [built]
    [./node_modules/loglevel/lib/loglevel.js] 7.68 KiB {main} [built]
    [./node_modules/strip-ansi/index.js] 161 bytes {main} [built]
    [./node_modules/url/url.js] 22.8 KiB {main} [built]
    [./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 7.78 KiB {main} [built]
    [./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.58 KiB {main} [built]
    [./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.05 KiB {main} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
    [./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive^\.\/log$ 170 bytes {main} [built]
    [./node_modules/webpack/hot/emitter.js] (webpack)/hot/emitter.js 75 bytes {main} [built]
    [./src/p5.ble.js] 2.23 KiB {main} [built]
        + 341 hidden modules
    Child html-webpack-plugin for "index.html":
        1 asset
        Entrypoint undefined = index.html
        [./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs] 376 bytes {0} [built]
        [./node_modules/lodash/lodash.js] 527 KiB {0} [built]
        [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
        [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
    ℹ ｢wdm｣: Compiled successfully.
    ```

    If you see this message, it means the project is actively being built by Webpack's `webpack-dev-server`. Any changes you make to any file in the `/src` folder will automatically rebuild the `p5.ble.js` and `p5.ble.min.js` libraries as long as the server continues to run.

4. Develop!

  Go to [https://github.com/yining1023/p5-ble-examples](https://github.com/yining1023/p5-ble-examples). Create a new folder called `/yourExample` in the project's `p5_sketches` folder. Create an `index.html` file inside `/yourExample` and add the following:

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Test</title>
    <script src="http://localhost:8080/p5.ble.js"></script>
  </head>
  <body>

    <script>

    </script>

  </body>
  </html>
  ```

  This is just a simple `html` file that has a reference to the `p5.ble.js` library.

  Next, open the `/src/index.js` file and add this after the last line:

  ```javascript
  console.log('Hello Test Development!');
  ```

  If you now go to `http://localhost:8080/` and open the console, you should see `Hello Test Development!`. As you make changes, you will simply need to reload the `index.html` page to see them.

5. Once you have finished testing, you can build the library. Just close the `webpack-dev-server` and run

  ```bash
  npm run build
  ```

  That should output something very similar to the `webpack-dev-server` from step 3 but you'll notice at the end is this line:

  ```bash
    Built at: 2018-12-27 13:08:34
            Asset     Size  Chunks             Chunk Names
        p5.ble.js  442 KiB    main  [emitted]  main
    p5.ble.js.map  355 KiB    main  [emitted]  main
    Entrypoint main = p5.ble.js p5.ble.js.map
    [0] multi babel-polyfill ./src/p5.ble.js 40 bytes {main} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
    [./src/p5.ble.js] 2.23 KiB {main} [built]
        + 330 hidden modules
    Hash: 1040a5eace6dd8c8ac17
    Version: webpack 4.28.2
    Time: 4180ms
    Built at: 2018-12-27 13:08:37
                Asset     Size  Chunks             Chunk Names
        p5.ble.min.js   94 KiB       0  [emitted]  main
    p5.ble.min.js.map  427 KiB       0  [emitted]  main
    Entrypoint main = p5.ble.min.js p5.ble.min.js.map
    [93] (webpack)/buildin/global.js 472 bytes {0} [built]
    [130] multi babel-polyfill ./src/p5.ble.js 40 bytes {0} [built]
    [332] ./src/p5.ble.js 2.23 KiB {0} [built]
    + 330 hidden modules
  ```

  If you see this, it means the library was successfully built and minified.

6. (OPTIONAL) Push your code and submit a Pull Request!
