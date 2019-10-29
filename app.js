// "use strict";

// const fs = require("mz/fs");
// const {
//   user,
//   role,
//   user_role,
//   dynamic,
//   dynamic_comment,
//   dynamic_respond,
//   schedule,
//   collect
// } = require("./init/data");

// module.exports = app => {
//   app.beforeStart(async () => {
//     // The application will wait for this function to complete before starting
//     await app.model.sync({ force: true }); //生成数据库模型（实例化）
//     await app.model.User.bulkCreate(user);
//     await app.model.Role.bulkCreate(role);
//     await app.model.UserRole.bulkCreate(user_role);
//     await app.model.Dynamic.bulkCreate(dynamic);
//     await app.model.DynamicComment.bulkCreate(dynamic_comment);
//     await app.model.DynamicRespond.bulkCreate(dynamic_respond);
//     await app.model.Schedule.bulkCreate(schedule);
//     await app.model.Schedule.bulkCreate(collect);
//     console.log("插入数据成功");
//   });
// };
