const Controller = require('egg').Controller;

class ProjectsController extends Controller {
  /**
   * 添加项目
   */
  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;

    await ctx.model.Projects.create({
      name,
    });

    ctx.status = 200;
    ctx.body = {
      msg: '添加成功',
    };
  }

  /**
   * 获取项目列表
   */
  async list() {
    const ctx = this.ctx;
    const data = await ctx.model.Projects.findAll({
      attributes: ['id', 'name'],
    });

    ctx.status = 200;
    ctx.body = data;
  }
}

module.exports = ProjectsController;
