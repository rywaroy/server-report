const Controller = require('egg').Controller;

class ErrorsController extends Controller {
  async index() {
    
    this.ctx.body = {
      status: 200,
      data: {},
      msg: '成功',
    }
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    console.log(name, age);
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }
}

module.exports = ErrorsController;