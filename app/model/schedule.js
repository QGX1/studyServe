// 图书信息数据库
module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    var moment = require('moment');
    
    const Schedule = app.model.define("schedule", {
        schedule_id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        mydata: {
            type: DATE,
            allowNull: true
        },
        something: {
            type: STRING(50),
            allowNull: true
        },
        user_id: {
            type: INTEGER.UNSIGNED,
            references: {
                model: "user",
                key: "user_id",
                comment: "用户表id(外键)"
            }
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
    return Schedule;
};
