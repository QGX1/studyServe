module.exports = app => {//笔记标签表模型
  const { INTEGER, STRING, TINYINT, DATE, NOW } = app.Sequelize;
  const NoteLabel = app.model.define("note_label", {
    nl_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      comment: "笔记标签表id(主键)"
    },
    label_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "label",
        key: "label_id",
        comment: "标签表id（外键）"
      }
    },

    note_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "note",
        key: "note_id",
        comment: "笔记表id(外键)"
      }
    },
    created_at: {
      type: DATE,
      defaultValue: NOW()
    }
  },
  {
    freezeTableName: true,
    tableName: 'note_label'
});
NoteLabel.associate = function() {
      //  app.model.NoteLabel.hasOne(app.model.Note, { foreignKey: 'note_id' });
      // app.model.User.hasMany(app.model.Family, { foreignKey: 'userId', targetKey: 'id' });
      // app.model.NoteLabel.belongsToMany(app.model.Note, { foreignKey: 'note_id',targetKey: 'note_id' ,through: NoteLabel });
      app.model.NoteLabel.belongsTo(app.model.Note, { foreignKey: 'note_id',targetKey: 'note_id' });
      // app.model.NoteLabel.belongsTo(app.model.Label, { foreignKey: 'label_id',targetKey: 'label_id' });
  } 
  return NoteLabel;
};
