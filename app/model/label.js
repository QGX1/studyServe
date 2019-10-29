module.exports=app=>{//标签表模型
    const { INTEGER, STRING, TINYINT, DATE, NOW } = app.Sequelize;
    const Label=app.model.define('label',{
        label_id:{
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            comment: "标签表id(主键)"
        },
        label_name:{
            type:STRING,
            allowNull:false
        },
    },
    
    // 联表
  {
    freezeTableName: true,
    tableName: 'label'
  });
  Label.associate = function() {
    app.model.Label.hasMany(app.model.Note, { foreignKey: 'label_id', targetKey: 'label_id' });
    // app.model.Label.hasMany(app.model.NoteLabel, { foreignKey: 'label_id', targetKey: 'label_id' });
  }
    return Label;
}