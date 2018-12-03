'use strict';

const Controller = require('egg').Controller;

class RedEnvelopeController extends Controller {
  async create() {
    let data = {
      redEnvelopeKey: (new Date().getTime()).toString(),
      redEnvelopRealKey: (new Date().getTime()).toString(),
      isGranted: false,
      isExchange: false,
      createTime: new Date()
    }
    await this.service.redEnvelope.create(data);
    this.ctx.body = 'create';
  }

  async getARedEnvelopeKey() {
    this.ctx.body = await this.service.redEnvelope.getARedEnvelopeKey();
    //this.ctx.body = 'getARedEnvelopeKey1';
  }

  async grantARedEnvelopToUser() {
    let queryParam = {};
    if (this.ctx.request.query.openId) {
      queryParam.openId = user.openId;
      queryParam.uuid = '';
    } else {
      queryParam.openId = '';
      queryParam.uuid = this.ctx.request.query.uuid;
    }
    let result = await this.service.redEnvelope.getRedEnvelopeGrantByUser(queryParam);
    if (result.length < 4) {
      //取出一个红包
      let redEnvelope = await this.service.redEnvelope.getARedEnvelopeKey();
      if (redEnvelope) {
        let _redEnvelope = {
          _id: redEnvelope.id
        };
        //修改这个红包状态为 已授予
        await this.service.redEnvelope.updateARedEnvelopeStatus(_redEnvelope);

        queryParam.redEnvelopeKey = redEnvelope.redEnvelopeKey;
        let grantRedEnvelopeKeyToUser = await this.service.redEnvelope.grantRedEnvelopeKeyToUser(queryParam);
        this.ctx.body = redEnvelope;
      }else{
        this.ctx.body =`红包已领完`;
      }
    } else {
      this.ctx.body = `'你已领${result.length}个红包'`
    }
  }



  async redEnvelopeGrant() {

    this.ctx.body = 'controller grant';
  }

}

module.exports = RedEnvelopeController;
