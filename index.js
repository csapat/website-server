const express = require('express')
const bodyParser = require('body-parser')
const seq = require('./seq.js')

const app = express()
const http = require('http').Server(app)

const Post = require('./Post.js')

seq.sync()

app.use(bodyParser.json())
app.set('trust proxy', true)

app.use(function(req, res, next){
	res.header('Content-Type', 'application/json')
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	return next()
})

const apiRouter = require('express').Router()

apiRouter.get('/posts', (req, res, next)=>{
	Post.findAll().then(posts=>{
		res.send(posts)
	})
})

app.get('*', (req, res, next)=>{
	res.sendFile(__dirname, "public", "index.html")
})

app.use((req, res, next)=>{
	res.sendStatus(404)
})

http.listen(5005, ()=>{
	console.log('app running on 5005')
})


module.exports = router