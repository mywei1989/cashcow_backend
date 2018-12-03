
// 兑换红包    主要记录 openId 兑换红包情况
module.exports = app =>{
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('redEnvelope');
  const RedEnvelopeExchangeSchema = new Schema({
    openId:{
      type:String,
    },
    redEnvelopeKey:{
      type:String,
    },
    createTime:{
      type:Date
    }
  });

  return conn.model('redEnvelopeExchange',RedEnvelopeExchangeSchema,'redEnvelopeExchange');
}
