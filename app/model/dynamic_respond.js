module.exports = app => {//动态回复表模型
  const { INTEGER, STRING, TINYINT, DATE, NOW } = app.Sequelize;
  const DynamicRespond = app.model.define("dynamic_respond", {
    comment_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "dynamic_comment",
        key: "comment_id",
        comment: "评论表id（外键）"
      }
    },
    respond_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comment: "回复表id(主键)"
    },
    respond_content: {
      type: STRING
    },
    user_id: {
      type: INTEGER.UNSIGNED,
      comment:
        "回复者id，即当前账号用户（解析token可得）（被回复者可通过comment_id查询dynamic_comment表中的user_id得到"
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
  return DynamicRespond;
};
