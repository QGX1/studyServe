'use strict';

/** @type Egg.EggPlugin */

//npm i egg-cors --save 跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// egg-sequelize访问 MySQL 数据库,启用数据库
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};