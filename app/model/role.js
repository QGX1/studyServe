module.exports = app => {//角色表模型
    const { CHAR, INTEGER, DATE,NOW } = app.Sequelize;
    const Role=app.model.define('role', {   
      role_id: {
        type: INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      role_name:{ 
        type:CHAR(20), 
      },
    });
  return Role;
};