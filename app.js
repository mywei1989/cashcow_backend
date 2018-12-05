'use strict'

const OAuth = require('co-wechat-oauth');

module.exports = app => {
  app.beforeStart(async () => {
    // try{
    //   app.OAuth = new OAuth(app.config.wechat.appid, app.config.wechat.secret);
    // }catch(e){
    //   app.logger.error('new OAuth error', e);
    // }
    const ctx = app.createAnonymousContext();
    let result = await ctx.service.wechat.menu.createMenu();
  });
};

async function checkMenu(){

}
