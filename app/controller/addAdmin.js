"use strict";

//添加管理员controller
const Controller = require("egg").Controller;

class AddAdminController extends Controller {
  async index() {
    const ctx = this.ctx;
    const info = ctx.request.body.formInfo;
    console.log(info);
    let code = await this.service.admin.addAdmin(
      info
    );
    console.log(code);

    ctx.body = {
      // 返回给前端
    };
    ctx.status = 200; //
  }
}

module.exports = AddAdminController;
