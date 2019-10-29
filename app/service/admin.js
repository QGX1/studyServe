"use strict";

//响应controller层的调用
const Service = require("egg").Service;
const ctx = this.ctx;
class AdminService extends Service {
  async addAdmin(info) {
    console.log(info.name);

    await this.app.model.User.create({
      //向用户表和角色表中插入数据
      user_name: info.name,
      user_password: info.password,
      sex: info.sex,
      email: info.email
    })
      .then(result => {
        return Promise.all([
          this.app.model.UserRole.create({
            user_id: result.user_id,
            role_id: 2
          })
        ]);
      })
      .catch(err => {
        console.error(err);
      });
    return true;
  }

  async deleteAdmin(info) {
    console.log(info.id+'管理员id');
    //从用户表和用户角色表中删除信息
    await this.app.model.User.destroy({
      where: {
        user_id: info.id,
        user_name: info.name,
      }
    }).then(result => {
      console.log(result)
      return Promise.all([
        this.app.model.UserRole.destroy({
          where: {
            user_id: info.id
          }
        })
      ]);
    });
    return '删除成功';
  }
}

module.exports = AdminService;
