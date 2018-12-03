'use strict';

const Service = require('egg').Service;
class RedEnvelopeService extends Service {
  async create(redEnvelope) {
    const redEnvelopePool = new this.ctx.model.RedEnvelopePool({
      ...redEnvelope
    });
    redEnvelopePool.save()
  }

  //查询某用户被授予了几个红包
  async getRedEnvelopeGrantByUser(user) {
    const result = await this.ctx.model.RedEnvelopeGrant.find({
      ...user
    });
    return result;
  }

  //获取一个未使用的红包
  async getARedEnvelopeKey() {
    const result = await this.ctx.model.RedEnvelopePool.findOne({
      isGranted: false
    });
    return result;
  }
  // 将红包发给某个用户 (将某个红包修改成已授予状态)
  async updateARedEnvelopeStatus(redEnvelope) {
    const result = await this.ctx.model.RedEnvelopePool.updateOne({
      ...redEnvelope
    }, { isGranted: true });
    return result
  }

  // 授予一个红包给用户
  async grantRedEnvelopeKeyToUser(grant) {
    const redEnvelopeGrant = new this.ctx.model.RedEnvelopeGrant({
      ...grant,
      createTime:new Date()
    });
    redEnvelopeGrant.save();
  }

  //兑换红包前 查询该用户兑换了多少次红包
  // 这里在公众号内 可以使用openId
  async getRedEnvelopeRealKeyByUser(user){

  }
}

module.exports = RedEnvelopeService;

