'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.all('/wechat', controller.wechat.index);
  router.get('/authorizeURL', controller.wechat.authorizeURL);
  router.get('/jssdk', controller.wechat.jssdk);

  //抽奖动作 返回口令
  router.get('/create',controller.redEnvelope.create);

  router.get('/getARedEnvelopeKey',controller.redEnvelope.getARedEnvelopeKey);



  router.get('/grantARedEnvelopToUser',controller.redEnvelope.grantARedEnvelopToUser);

  router.get('/test',controller.test.index);
  router.get('/testredis',controller.test.testredis);
};
