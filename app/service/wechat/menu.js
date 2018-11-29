'use strict';

const Service = require('egg').Service;
class MenuService extends Service {

  async getMenu() {
    const { wechatApi } = this.app;
    let menu =  await wechatApi.getMenu();
    return menu;
  }

  async createMenu(){
    const { wechatApi,config } = this.app;

    let result = null;
    try{
      let result = await wechatApi.createMenu(config.wechat.menu);
    }catch(e){
      console.log(e);
    }
    return result;
  }
}

module.exports = MenuService;
