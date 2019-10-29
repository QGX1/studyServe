"use strict";
module.exports = app => {//用户角色表模型
  const { INTEGER } = app.Sequelize;
  const UserRole = app.model.define("user_role", {
    ur_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comment: "用户角色表id"
    },
    user_id: {
      type: INTEGER.UNSIGNED, // 创建外键
      references: {
        model: "user",
        key: "user_id",
        comment: "用户表id(外键)"
      }
    },
    role_id: {
      type: INTEGER.UNSIGNED, //创建外键
      references: {
        model: "role",
        key: "role_id",
        comment: "角色表id(外键)"
      }
    }
  });
  UserRole.associate = function() {
    app.model.UserRole.belongsTo(app.model.User, {
      foreignKey: "user_id",
      targetKey: "user_id"
    });
  };
  return UserRole;
};
