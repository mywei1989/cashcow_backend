'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543299434246_7186';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      ignore: '/wechat', // 忽略微信推送 POST 消息的 csrf 验证
    },
  };

  // 请在 config.prod.js 中配置实际的值
  config.wechat = {
    token: '',
    appid: '',
    encodingAESKey: '',
    secret: '',
  };

  config.wechatApi = {
    appId: '',
    appSecret: '',
    adapter: '',
    redisInstance:''
  };

  config.redis = {
    clients: {
      wechat: {                 // instanceName. See below
        port: 16379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: 'cashcow',
        db: 0,
      },
      redenvelope:{
        port: 16379, // Redis port
        host: '127.0.0.1', // Redis host
        password: 'cashcow',
        db: 1,
      },
      test:{
        port: 16379, // Redis port
        host: '127.0.0.1', // Redis host
        password: 'cashcow',
        db: 15,
      }
    },
  };

  config.mongoose = {
    clients: {
      // redEnvelope: {
      //   url: 'mongodb://127.0.0.1:37017/redEnvelope',
      //   options: {},
      // }
      redEnvelope: {
        url: 'mongodb://127.0.0.1:37017/redEnvelope',
        options: {},
      }
    },
  }

  // view ejs engine config
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  config.ejs = {
    root: path.join(appInfo.baseDir, 'app/view'),
    cache: true,
    debug: false,
    compileDebug: true,
    delimiter: null,
    strict: false,
  };

  config.static = {
  };

  config.wechat.menu = {
    button: [
      {
        type: "view",
        name: "静雅听书",
        url: "https://jybaoming.v5.com/distribute/index?d=203399",
        sub_button: []
      },
      {
        type: "view",
        name: "九块九",
        url: "https://teach.98u.com/wx/?#/lesson/channel/CA2714160649994429300163E130B4C6?channel_id=203403&s=1",
        sub_button: []
      },
      {
        type: "view",
        name: "微撩",
        url: "https://teach.98u.com/wx/?#/lesson/channel/CA154916442653958700163E130B4C10?channel_id=203404&s=1",
        sub_button: []
      }
    ]

  }


  return config;
};
