module.exports = app => {//收藏表模型
  const { STRING, INTEGER, DATE, NOW,TEXT} = app.Sequelize;
  var moment = require('moment');

  const Collect = app.model.define("collect", {
    collect_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comments: "收藏ID"
    },
    user_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "user",
        key: "user_id"
      }
    },
      note_title: {
        type: STRING,
        allowNull: true,
      },
      note_content: {
        type:STRING,
        allowNull: true,
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
  return Collect;
};
