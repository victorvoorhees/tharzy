const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.TEXT('medium'),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    postedBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Posts'
});

Post.sync().then(() => console.log('table either detected or created!')).catch(err => console.error('sync failed?', err));

module.exports = Post;