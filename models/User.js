'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.CHAR
    },{
        underscored: true,
        timestamps: true,
        freezeTableName: true,
        tableName: 'users',
        classMethods: {}
    });
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
