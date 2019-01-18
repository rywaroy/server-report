const Controller = require('egg').Controller;
const dayjs = require('dayjs');
const fs = require('fs');
const SourceMapConsumer = require('source-map').SourceMapConsumer;

class ErrorsController extends Controller {
  /**
   * 创建出错
   */
  async create() {
    const ctx = this.ctx;
    const { project, msg, url, line, col, browser, version } = ctx.request.body;
    await ctx.model.Errors.findOrCreate({
      where: {
        project,
        line,
        col,
        msg,
        url,
        state: 1,
        browser,
        version,
      },
    });
    ctx.status = 200;
    ctx.body = {
      msg: '添加成功',
    };
  }

  /**
   * 获取错误列表
   */
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
      total: data.count,
    };
  }

  /**
   * 解决错误
   */
  async fix() {
    const ctx = this.ctx;
    const { id } = ctx.params;
    await ctx.model.Errors.update({
      state: 0,
    }, {
      where: {
        id,
      },
    });
    ctx.status = 200;
    ctx.body = {
      msg: '操作成功',
    };
  }

  /**
   * 获取source-map 真实行列号
   */
  async location() {
    const ctx = this.ctx;
    const { project, line, col, url } = ctx.query;
    const urlArr = url.split('/');
    const fileName = urlArr[urlArr.length - 1];
    const consumer = await new SourceMapConsumer(fs.readFileSync(`/Users/zhangzhihao/GitHub/web-report/dist/${fileName}.map`, 'utf8'));
    ctx.status = 200;
    ctx.body = consumer.originalPositionFor({
      line: +line,
      column: +col,
    });
  }
}

module.exports = ErrorsController;
