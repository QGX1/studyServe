// 收藏【增、删】
'use strict';

const Controller = require('egg').Controller;

class CollectController extends Controller {

  //  查看收藏
  async checkCollect() {
    var ctx=this.ctx;
    console.log("查看我的收藏")
    var user_id=ctx.request.query.user_id;
    // var user_id=JSON.parse(user_id1);
    console.log(ctx.request.query)
    
    var checkCo= await ctx.app.model.Collect.findAll({
      attributes: {  },
      where: {
        user_id:user_id,
        
      }
    });
    ctx.body={
      checkCo:checkCo,
      message:"查询收藏成功"
    }
    ctx.status=200;
  }
//  添加收藏
    async addCollect() {
    var ctx=this.ctx;
    var note_title=ctx.request.body.note_title;
    var note_content=ctx.request.body.note_content;
    var user_id=ctx.request.body.user_id;
    console.log(ctx.request.body)

    // 访问数据库，向数据库中的表插入数据
    var addCo=await ctx.app.model.Collect.create({note_title:note_title,note_content:note_content,user_id:user_id})
    .then(res=>{
      console.log(res)
    })
    console.log("增加收藏")

    ctx.body={
      message:"收藏成功"
    }
    ctx.status=200
  }


  //  取消收藏，删除数据传递用户收藏id
  async removeCollect() {
    var ctx=this.ctx;
    
    var user_id=ctx.request.query.user_id;
    var collect_id=ctx.request.query.collect_id;

    let removeCo=await ctx.app.model.Collect.destroy({
      where:{
        user_id:user_id,
        collect_id:collect_id
      }
    }).then(res=>{
      console.log(res);
    })
    ctx.body={
      message:"删除收藏成功"
    }
    console.log("删除成功")
    ctx.status=200
  }
}

module.exports = CollectController;
