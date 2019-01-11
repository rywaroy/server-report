const Controller = require('egg').Controller;
const dayjs = require('dayjs');

class ErrorsController extends Controller {

  async create() {
    const ctx = this.ctx;
    const { project, msg, url, line, col } = ctx.request.body;
    await ctx.model.Errors.findOrCreate({
      where: {
        project,
        line,
        col,
        msg,
        url,
      },
    })
    ctx.status = 200;
    ctx.body = {
      msg: '添加成功'
    };
  }

  async list() {
    const ctx = this.ctx;
    let { page, limit, project, date } = ctx.query;
    page = Number(page) || 1;
    limit = Number(limit) || 10;
    const data = await ctx.model.Errors.findAndCount({
      where: {
        ...(project && { project }),
        ...(date && { created_at: {
          $lt: new Date(dayjs(date).valueOf() + 24 * 60 * 60 * 1000),
          $gt: new Date(date),
        } }),
      },
      order: [['id', 'desc']],
      limit,
      offset: (page - 1) * limit,
    });
    ctx.status = 200;
    ctx.body = {
      list: data.rows,
      total: data.count
    };
  }
}

module.exports = ErrorsController;