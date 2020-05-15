const path = require('path');
const fs = require('fs');

const entrys = {
  index: './src/index.js',
};
fs.readdirSync('./packages').map((key) => {
  entrys[key] = `./packages/${key}/index.js`;
});
module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/index.js',
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    entry: entrys,
    output: {
      filename: '[name].js',
      library: 'pxui',
      libraryTarget: 'umd',
      libraryExport: 'default',
      umdNamedDefine: false,
    },
    devtool: '#source-map',
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/styles/palette.styl'),
      ],
    },
  },
  // see :https://github.com/neutrinojs/webpack-chain
  // chainWebpack: (config) => {
  //   // eslint-disable-next-line no-unused-vars
  //   config.plugin('extract-css').init((Plugin, args) =>
  // new Plugin({ filename: 'theme/[name].css' }));
  // },
  css: {
    extract: true,
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
};
