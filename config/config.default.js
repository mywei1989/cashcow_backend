'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543299434246_7186';

  config.wx_appid = 'wx1e0cc1ef83647d3c'; //开发者ID(AppID
  config.wx_secret = 'bfc9411e2ac7f026e81edb794b95ece8';  //开发者密码(AppSecret)

  // add your config here
  config.middleware = [];

  return config;
};
