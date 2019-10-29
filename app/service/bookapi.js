// 获取图书信息
'use strict';

const Service = require('egg').Service;

class BookapiewsService extends Service {
  async getNewsList() {
    
    //通过抓取接口返回数据

    // curl的方法可以获取远程的数据
    var api=this.config.api+'query?key=52794da25b42b9d613582ab0768296b8&catalog_id=246&rn=20&rn=20'

    var response=await this.ctx.curl(api);//数据请求
    
    // console.log(response.data); // 返回的是Buffer
    
    var data=JSON.parse(response.data);    //把Buffer类型转转换成对象

    // console.log(data.result.data);
    var lists=data.result.data
    // console.log(lists.length);
  
    return lists;
  }

  //获取新闻详情

  async getNewsContent(aid){


    var api=this.config.api+'appapi.php?a=getPortalArticle&aid='+aid;


    var response=await this.ctx.curl(api);

    var data=JSON.parse(response.data);    //把Buffer类型转转换成对象

    return data.result;

  }
}

module.exports = BookapiewsService;
