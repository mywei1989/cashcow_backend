'use strict'

const OAuth = require('co-wechat-oauth');

module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    try{
      app.OAuth = new OAuth(app.config.wechat.appid, app.config.wechat.secret);
    }catch(e){
      app.logger.error('new OAuth error', e);
    }
    // console.log(a);
    const ctx = app.createAnonymousContext();
    let result = await ctx.service.wechat.menu.createMenu();
    console.log(result);
  });
};

async function checkMenu(){

}
