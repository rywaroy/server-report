const Controller = require('egg').Controller;

class ErrorController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = ErrorController;