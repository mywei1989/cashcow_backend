'use strict';
const Subscription = require('egg').Subscription;

class UpdateAccessToken extends Subscription {
  static get schedule() {
    return {
      interval: '10s', //微信 accesstoken 120分钟过期 这里100分钟刷新一次, 100m
      type: 'worker'
    }
  }
  async subscribe() {
    //this.logger.debug(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.config.wx_appid}&secret=${this.config.wx_secret}`)
    //console.log(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.config.wx_appid}&secret=${this.config.wx_secret}`)
    //this.logger.info('message = %o', (new Date()).getTime());
    console.log('subscribe');
  }
}

module.exports = UpdateAccessToken;
