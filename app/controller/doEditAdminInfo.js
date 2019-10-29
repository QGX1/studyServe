"use strict";


//编辑管理员信息controller
const Controller = require("egg").Controller;

class DoEditAdminInfoController extends Controller {
  async updatedAdmin() {
    const ctx = this.ctx;
    let adminId = ctx.request.body.formInfo.id;
    let adminName = ctx.request.body.formInfo.name;
    let adminEmail = ctx.request.body.formInfo.email;
    let adminSex = ctx.request.body.formInfo.sex;
    console.log(adminId + adminName + adminEmail + adminSex);

    // User.update({ name: "lilei" }, { where: { id: 1 } });
    // let user1 = await ctx.app.model.User.findOne({
    //   // attributes: { exclude: ["user_id"] },
    //   where: {
    //     user_name: username,
    //     user_password: userpassword
    //   }
    // });
   
     //更新用户信息
    await ctx.app.model.User.update(
      { user_name: adminName, sex: adminSex, email: adminEmail },
      { where: { user_id: adminId } }
    );

    ctx.body = {
      // 返回给前端
    };
    ctx.status = 200; //
  }
}

module.exports = DoEditAdminInfoController;
