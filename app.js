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
    //https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx1e0cc1ef83647d3c&secret=bfc9411e2ac7f026e81edb794b95ece8
    //16_PIAs4-p4_4iAvGJba49S0NswGh0L7_WBWhuXEOv0Qh1G0xSZk2aqZbfqwokDHsIsk_mPyv4Pvp3OJzdSZnil4lrsngHWX6pa-kDyhTbOM2PaiFJB9Mtrh-S0NPez_L5MIHmhUuKDAORIMtJZPPUaAIAJJO
    //console.log('beforeStart')
    //console.log(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${app.config.wx_appid}&secret=${app.config.wx_secret}`)
  });
};

//16_Pe0rR5-yByqL6mgoz-QbSVTeVjnedN02AZklw9hvBoe2_K4bbTMbgpPjtyAvdf_XlxAUGhkfTZaaeTJ9d4qDb-61fJWTyYJpAdRkOQXh9_kq5y21kJZD3IXgdzHCpnx79m6NCK_UpUZiTkY-HPXbAEAKSA
// {
//   access_token: "16_Pe0rR5-yByqL6mgoz-QbSVTeVjnedN02AZklw9hvBoe2_K4bbTMbgpPjtyAvdf_XlxAUGhkfTZaaeTJ9d4qDb-61fJWTyYJpAdRkOQXh9_kq5y21kJZD3IXgdzHCpnx79m6NCK_UpUZiTkY-HPXbAEAKSA",
//     expires_in: 7200
// }
