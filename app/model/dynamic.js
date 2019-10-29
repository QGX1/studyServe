module.exports = app => {//动态表模型
  const { INTEGER, STRING, TINYINT, DATE,NOW } = app.Sequelize;
  const Dynamic = app.model.define("dynamic", {
    user_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "user",
        key: "user_id",
        comment: "用户角色表id(外键)"
      }
    },
    dynamic_id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    dynamic_content: {
      type: STRING
    },
    like_count: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: "点赞数"
    },
    dynamic_permiss: {
      type: TINYINT,
      allowNull: false,
      is: [[0-1], "i"],
      comment: "动态权限(0为私有，1为全部人可见)"
    },
    created_at: {
      type: DATE,
      defaultValue: NOW(),
      comment:'发布动态时间',
      get() {
        return moment(this.getDataValue("created_at")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    }
  });
  return Dynamic;
};
