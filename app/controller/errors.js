const Controller = require('egg').Controller;

class ErrorsController extends Controller {

  async create() {
    const ctx = this.ctx;
    const { project, msg, url, line, col } = ctx.request.body;
    const errors = await ctx.model.Errors.create({
      project,
      msg,
      url,
      line,
      col,
    });
    ctx.status = 200;
    ctx.body = errors;
  }
}

module.exports = ErrorsController;