
// 授予红包    主要记录 openId 领取红包情况
module.exports = app =>{
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('redEnvelope');
  const RedEnvelopeGrantSchema = new Schema({
    openId:{
      type:String,
    },
    uuid:{
      type:String,
    },
    redEnvelopeKey:{
      type:String,
    },
    createTime:{
      type:Date
    }
  });

  return conn.model('redEnvelopeGrant',RedEnvelopeGrantSchema,'redEnvelopeGrant');
}
