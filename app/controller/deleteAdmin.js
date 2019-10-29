'use strict';


//删除管理员controller
const Controller = require('egg').Controller;

class DeleteAdminController extends Controller {
  async doDelete() {
    const ctx=this.ctx;
    const info =ctx.request.body.formInfo;
    const code =await this.service.admin.deleteAdmin(info);
    console.log(code);
    ctx.body={

    };
    ctx.status=200;
  }
};

module.exports = DeleteAdminController;
