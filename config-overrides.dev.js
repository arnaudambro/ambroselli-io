const path = require('path');

module.exports = function(config) {

  // Add the loader second-to-last
  // (last one must remain as the "file-loader")
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.svg$/,
    loader: 'raw-loader'
  });
}
