const Controller = require('egg').Controller;


class PerfirmanceController extends Controller {
  /**
   * 创建
   */
  async create() {
    const ctx = this.ctx;
    const {
      lookupDomainTime, // DNS 耗时
      connectTime, // TCP链接耗时
      requestTime, // request请求耗时
      domReadyTime, // 解析dom耗时
      readyStart, // 准备新页面所花费的时间
      scriptLoadTime, // 脚本加载时间
      pageFullLoadTime, // 页面完全加载时间
      project,
      browser,
      version,
    } = ctx.request.body;

    await ctx.model.Performance.create({
      lookupDomainTime,
      connectTime,
      requestTime,
      domReadyTime,
      readyStart,
      scriptLoadTime,
      pageFullLoadTime,
      project,
      browser,
      version,
    });

    ctx.status = 200;
    ctx.body = {
      msg: '添加成功',
    };
  }

  /**
   * 获取列表
   */
  async list() {
    const ctx = this.ctx;
    let { project, start, end } = ctx.query;
    const createdAt = {};
    if (start) createdAt.$gt = new Date(start);
    if (end) createdAt.$gl = new Date(end);
    const data = await ctx.model.Errors.findAndCount({
      where: {
        ...(project && { project }),
        created_at: createdAt,
      },
      order: [['id', 'desc']],
    });
    ctx.status = 200;
    ctx.body = {
      list: data.rows,
      total: data.count,
    };
  }
}

module.exports = PerfirmanceController;
