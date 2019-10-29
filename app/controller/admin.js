"use strict";

const Controller = require("egg").Controller;
const jwt = require("jsonwebtoken");

class AdminController extends Controller {
  async index() {
    console.log("admin测试");
    const ctx = this.ctx;
    //在数据库中验证用户密码，获取用户id
    let username = ctx.request.body.adminUser;
    let userpassword = ctx.request.body.adminPassword;
    // 访问用户数据库，查询用户信息，返回token

    // 联表（用户角色表和用户表）查询当前登录用户身份角色
    let user1 = await ctx.app.model.User.findOne({
      // attributes: { exclude: ["user_id"] },
      where: {
        user_name: username,
        user_password: userpassword
      }
    });
    if (user1.length == 0) {
      ctx.status = 404; // 返回给前端
    } else {
      /*
      把用户信息加密成 token 
      */
      const token = jwt.sign(
        {
          user_name: ctx.query.username, // user_id
          user_password: ctx.query.userpassword
        },
        "hrmyproject2019",
        {
          // 秘钥
          expiresIn: "600s" // 过期时间
        }
      );

      let user2 = await ctx.app.model.User.findOne({
        where: {
          user_name: username,
          user_password: userpassword
        }
      })
        .then(res => {
          return Promise.all([
            ctx.app.model.UserRole.findOne({
              where: {
                user_id: res.user_id
              }
            })
          ]);
        })
        .catch(err => {
          console.error(err);
        });
      // console.log(user2[0].role_id+'皇后');
      ctx.body = {
        // 返回给前端
        user: user2[0].role_id,
        token: token
      };
      ctx.status = 200; // 状态码 200
    }
  }
}

module.exports = AdminController;
