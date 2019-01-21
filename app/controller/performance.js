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
}

module.exports = PerfirmanceController;
