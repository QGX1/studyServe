module.exports = app => {//笔记表模型
  const { INTEGER, STRING, TINYINT, DATE, NOW,LONGTEXT} = app.Sequelize;
  var moment = require('moment');

  const Note = app.model.define("note", {
    note_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "user",
        key: "user_id"
      }
    },
    label_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "label",
        key: "label_id",
        comment: "标签表id（外键）"
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
    note_permiss: {
      type: TINYINT,
      allowNull: false,
      is: [[0 - 1], "i"],
      comment: "动态权限(0为私有，1为全部人可见)"
    },
    updated_at: {
      type: DATE,
      defaultValue: NOW(),
    },
    created_at: {
      type: DATE,
      defaultValue: NOW(),
    }
  },
// 联表
  {
    freezeTableName: true,
    tableName: 'note'
  });
  Note.associate = function() {
    
    app.model.Note.hasMany(app.model.NoteLabel, { foreignKey: 'note_id', targetKey: 'note_id' });
    app.model.Note.belongsTo(app.model.Label, { foreignKey: 'label_id',targetKey: 'label_id' });
  }

  return Note;
};
