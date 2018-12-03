module.exports = app =>{
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('redEnvelope');
  const RedEnvelopePoolSchema = new Schema({
    redEnvelopeKey:{
      type:String,
    },
    redEnvelopRealKey:{
      type:String,
    },
    isGranted:{
      type:Boolean,
    },
    isExchange:{
      type:Boolean,
    },
    createTime:{
      type:Date
    }
  });

  return conn.model('redEnvelopePool',RedEnvelopePoolSchema,'redEnvelopePool');
}
