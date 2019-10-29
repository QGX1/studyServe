// 待办事项操作：增加、删除
'use strict';

const Controller = require('egg').Controller;

class ScheduleController extends Controller {
  async addSchedule() {
    const ctx = this.ctx;
    console.log("新建待办事项");
    // 获取数据
    var mydata=ctx.request.body.mydata;
    var something=ctx.request.body.something;
    var user_id=ctx.request.body.user_id;
    console.log(ctx.request.body)
    
    // 将待办事项的存储到数据库
    if(mydata==""&&something==""){
      ctx.status=404;
      ctx.body={
        message:"添加地板事项失败"
      }
    }else{
      // 访问数据库，向数据库中的表插入数据
      var sch=await ctx.app.model.Schedule.create({mydata:mydata,something:something,user_id:user_id})
      console.log("待办事项数据插入成功")
      };
      
      ctx.status=200
  }

  // 查询用户待办事项
  async checkSchedule(){
    const ctx=this.ctx;
    const user_id1=ctx.request.query.user_id;
    var user_id=JSON.parse(user_id1);
    console.log(typeof(user_id))
    
    var checkSch= await ctx.app.model.Schedule.findAll({
      attributes: {  },
      where: {
        user_id:user_id
      }
    });
    console.log(checkSch)
    console.log("查询待办事项")
    ctx.body={
      checkSch:checkSch
    }
    ctx.status=200;
  }

  async removeSchedule(){
    const ctx=this.ctx;
    var user_id=ctx.request.query.user_id;
    var schedule_id=ctx.request.query.schedule_id;

    let removeSch=await ctx.app.model.Schedule.destroy({
      where:{
        user_id:user_id,
        schedule_id:schedule_id
      }
    }).then(res=>{
      console.log(res);
    })
    
    console.log("删除成功")
    ctx.status=200
  }

  async removeAllSchedule(){
    const ctx=this.ctx;
    var user_id=ctx.request.query.user_id;
    let removeAllSch=await ctx.app.model.Schedule.destroy({
      where:{
        user_id:user_id
      }
    }).then(res=>{
      console.log(res);
    }) 

    console.log("删除全部成功")
    ctx.status=200
  }
}

module.exports = ScheduleController;

