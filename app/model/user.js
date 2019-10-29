module.exports = app => {//用户表模型
  const { STRING, INTEGER, DATE, NOW, TEXT } = app.Sequelize;
  var moment = require("moment");

  const User = app.model.define("user", {
    user_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comments: "用户ID"
    },
    user_name: {
      type: STRING(30),
      allowNull: false,
      unique: true
    },
    user_password: {
      type: STRING(30),
      allowNull: false
    },
    avatar: {
      type: STRING,
      allowNull: true,
      comments: "用户头像"
    },

    sex: {
      type: STRING,
      allowNull: true
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    sign: {
      type: STRING,
      allowNull: true
    },
    updated_at: {
      type: DATE,
      defaultValue: NOW(),
      get() {
        return moment(this.getDataValue("updated_at")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    },
    created_at: {
      type: DATE,
      defaultValue: NOW(),
      get() {
        return moment(this.getDataValue("created_at")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    }
  });
  User.associate = function() {
    app.model.User.hasMany(app.model.UserRole, {
      foreignKey: "user_id",
      targetKey: "user_id"
    });
  };
  return User;
};
