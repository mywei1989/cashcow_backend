const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx, app, logger } = this;
    ctx.body = 'index';
    await ShowCtx();
    ctx.body = ctx.body + 'index end';
  }

  async testredis(){
    const { ctx, app, logger } = this;
    let stream =  app.redis.get('test').sscanStream('myset',{
      match:'c*',
      count:0
    });

    let _data = [];
    await new Promise((resolve,reject)=>{
      stream.on('data', data =>{
        if(data.length>0){
          console.log(data);
          _data.push(data[0]);
        }
      }).on('end',()=>{
        resolve();
      })
    })
    ctx.body = _data;

    // stream.on('data', function (resultKeys) {
    //   // Pause the stream from scanning more keys until we've migrated the current keys.
    //   console.log('stream data')
    //   console.log(resultKeys);
    // });
    // stream.on('end', function () {
    //   console.log('stream end')
    //   ctx.body = 'testredis';
    // });

  }
}

async function ShowCtx(){
  const { ctx, app, logger } = this;
  await ShowApp()
  console.log('ctx');
}
async function ShowApp(){
  const { ctx, app, logger } = this;
  await ShowLogger()
  console.log('app');
}
async function ShowLogger(){
  const { ctx, app, logger } = this;
  console.log('logger');
}

module.exports = TestController;
