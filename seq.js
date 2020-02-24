const Sequelize = require('sequelize')
const config = require('./config')

const seq = new Sequelize(config.database.dbname, config.database.username, config.database.password, {
	host: '127.0.0.1',
	dialect: 	config.database.dialect,
	charset: 	config.database.charset,
    collate: 	config.database.collate,
    logging: 	(config.database.logging) ? console.log : false,
    alter: 		config.database.alter,
    force: 		config.database.force
})

module.exports = seq