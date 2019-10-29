module.exports = app => {//动态内容表模型
  const { INTEGER, STRING, TINYINT, DATE, NOW } = app.Sequelize;
  const DynamicComment = app.model.define("dynamic_comment", {
    comment_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    dynamic_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "dynamic",
        key: "dynamic_id"
      },
      comment: "动态表id（外键）"
    },
    comment_content: {
      type: STRING
    },
    user_id: {
      type: INTEGER.UNSIGNED,
      comment:
        "评论者id，即当前账号用户（解析token可得）（被评论者可通过dynamic_id查询）"
    },
    created_at: {
      type: DATE,
      defaultValue: NOW(),
      get() {
        return moment(this.getDataValue("updated_at")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
    }
  });
  return DynamicComment;
};
