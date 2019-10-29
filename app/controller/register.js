// 用户注册数据处理
'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class RegisterController extends Controller {
  
  async index() {
   
    const ctx = this.ctx;
    let user_name = ctx.request.body.username;
    let user_password= ctx.request.body. password;
    let email= ctx.request.body.email;

    var tips1,tips2,tips3;
    // 检测邮箱是否存在（邮箱唯一性）
    let user2 = await ctx.app.model.User.findOne({
      where: {
          email:email
      }
    })
    // 检测用户名是否存在（用户名唯一性）
    let user3 = await ctx.app.model.User.findOne({
      where: {
          user_name:user_name
      }
    })
    var user_id;
    //在数据库中验证用户密码，获取用户id,查询用户是否存在
    
    if(user2!=null){
      console.log("邮箱已存在")
      tips1="邮箱已存在"
    }else if(user3!=null){
      console.log("用户名已存在，请更换")
      tips2="用户名已存在，请更改"
    }else{
      // 访问数据库，向数据库中的表插入数据
      let reg=await ctx.app.model.User.create({user_name:user_name,user_password:user_password,email:email})
      .then(res=>{
        user_id=res.user_id;
        console.log(user_id)
        console.log("数据")
      })
      let ur=await ctx.app.model.UserRole.create({role_id:3,user_id:user_id})
      const token = jwt.sign({       
        user_name: ctx.query.username,      // user_id
        user_password:ctx.query.userpassword
        }, 'hrmyproject2019', { // 秘钥
          expiresIn: '600s' // 过期时间
      });
     
      console.log("服务端生成token："+token);
       tips3="注册成功"
    }
    ctx.body = {             // 返回给前端
      tips1:tips1,
      tips2:tips2,
      tips3:tips3
    };
    ctx.status = 200;  
  }
}

module.exports = RegisterController;
