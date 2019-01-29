const Controller = require('egg').Controller;

class UsersController extends Controller {
  /**
   * 登录
   */
  async login() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    try {
      const user = await ctx.model.Users.findOne({
        where: {
          username,
          password,
        },
      });

      if (user) {
        ctx.status = 200;
        const token = this.app.jwt.sign({
          username,
          exp: Date.now() / 1000 + 60 * 120,
        }, this.app.config.jwt.secret);
        ctx.body = {
          msg: '登录成功',
          token,
        };
      } else {
        ctx.status = 401;
        ctx.body = {
          msg: '用户不存在',
        };
      }
    } catch (e) {
      ctx.status = 401;
      ctx.body = {
        msg: '登录失败',
      };
    }
  }
}

module.exports = UsersController;
