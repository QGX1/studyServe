module.exports = app => {//动态图片表模型
  const { INTEGER, STRING, TINYINT, DATE, NOW } = app.Sequelize;
  const DynamicImg = app.model.define("dynamic_img", {
    img_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement:true,
      primaryKey:true,
    },
    dynamic_id: {
      type: INTEGER.UNSIGNED,
      references: {
        model: "dynamic",
        key: "dynamic_id",
        comment: "动态表id(外键)"
      },
    },
    img_path:{
        type:STRING,
    },
  });
  return DynamicImg;
};
