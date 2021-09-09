const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/webpack.base');

module.exports = (props) => {
  const { production } = props;
  const env = production ? 'production' : 'development';
  const config = require('./webpack/webpack.' + env);

  return merge(baseConfig, config);
};
