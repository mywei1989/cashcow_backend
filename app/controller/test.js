const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx, app, logger } = this;
    ctx.body = 'index';
    await ShowCtx();
    ctx.body = ctx.body + 'index end';
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
