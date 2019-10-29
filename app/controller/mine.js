// 我的页面：查看用户信息、修改用户信息
'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class MineController extends Controller {
  async checkMine() {
    const ctx=this.ctx;
    var user_id=ctx.request.query.user_id;

    // 访问数据库，user数据库
    let user=await ctx.app.model.User.findAll({
        attributes: {  },
        where: {
          user_id:user_id
        }
    })

    ctx.body={
        user:user
    }
    ctx.status=200//查询成功返回状态码
  }

  // 编辑用户个人信息
  async editInfo(){
    const ctx=this.ctx;
    var user_id=ctx.request.body.user_id;
    var user_name=ctx.request.body.user_name;
    var sign=ctx.request.body.sign;
    var sex=ctx.request.body.sex;

    var tipes3;
    // 检测用户名是否存在（用户名唯一性）
    let user3 = await ctx.app.model.User.findOne({
      where: {
          user_name:user_name
      }
    })
  //  判断用户名是否重复，确保用户名的唯一性
    if((user3!=null)&&(user3.user_id!=user_id)){
      tipes3="用户名已被使用，请更换"
    }else{
      
      // 访问数据库，修改用户的个人信息
      let user = await ctx.app.model.User.update({
        user_name:user_name,
        sign:sign,
        sex:sex
        },{
            where: {
                user_id:user_id
            }
    
      }).then(function(result){
        console.log('updated user');
        tipes3="修改成功"
      })
    }
    ctx.body={
      tipes3:tipes3
    }
    ctx.status=200
  }
}

module.exports = MineController;
