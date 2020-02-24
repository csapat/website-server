const Sequelize = require('sequelize')
const seq = require('../seq.js')

const Post = seq.define('post', {
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
    text: Sequelize.TEXT,
    author: Sequelize.TEXT,
    date: Sequelize.DATEONLY,
})

module.exports = Post