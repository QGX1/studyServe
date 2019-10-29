"use strict";

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  const checktoken = app.middleware.checktoken();
  // 路由请求
  router.post("/api/login", controller.login.index);
  router.post("/api/home", checktoken, controller.home.index);
  router.get("/api/home/allNote", controller.home.allNote);

  router.post("/api/register", controller.register.index);
  router.post("/api/checkEmail", controller.checkEmail.index);

  router.post("/api/Schedule/addSchedule", controller.schedule.addSchedule);
  router.get("/api/Schedule/checkSchedule", controller.schedule.checkSchedule);
  router.get("/api/Schedule/removeSchedule",controller.schedule.removeSchedule);
  router.get( "/api/schedule/removeAllSchedule",controller.schedule.removeAllSchedule);

  router.get("/api/note/checkNote", controller.note.checkNote);
  router.post("/api/note/addNote", controller.note.addNote);
  router.get("/api/note/removeNote", controller.note.removeNote);

  router.post("/api/collect/addCollect", controller.collect.addCollect);
  router.get("/api/collect/removeCollect", controller.collect.removeCollect);
  router.get("/api/collect/checkCollect", controller.collect.checkCollect);

  router.get("/api/mine/checkMine", controller.mine.checkMine);
  router.post("/api/mine/editInfo", controller.mine.editInfo);

  router.post("/api/moni/check", controller.moni.check);
  router.post("/api/moni/uploadImg", controller.moni.uploadImg);

  router.post("/api/adminlogin", controller.admin.index);
  router.post("/api/getAdminInfo", controller.adminInfo.index);
  router.post("/api/doEditAdminInfo", controller.doEditAdminInfo.updatedAdmin);
  router.post("/api/doAddAdmin", controller.addAdmin.index);
  router.post("/api/doDeleteAdmin", controller.deleteAdmin.doDelete);
  router.post("/api/getUsersInfo", controller.user.getInfo);
  router.post("/api/doDeleteUser", controller.user.deleteUser);
  router.post("/api/doAddUser", controller.user.AddUser);
  router.post("/api/doEditUserInfo", controller.user.EditUser);


  router.post("/api/adminlogin", controller.admin.index);
  router.post("/api/getAdminInfo", controller.adminInfo.index);
  router.post("/api/doEditAdminInfo", controller.doEditAdminInfo.updatedAdmin);
  router.post("/api/doAddAdmin", controller.addAdmin.index);
  router.post("/api/doDeleteAdmin", controller.deleteAdmin.doDelete);
  router.post("/api/getUsersInfo", controller.user.getInfo);
  router.post("/api/doDeleteUser", controller.user.deleteUser);
  router.post("/api/doAddUser", controller.user.AddUser);
  router.post("/api/doEditUserInfo", controller.user.EditUser);
  // router.get('/news', controller.news.index);
};
