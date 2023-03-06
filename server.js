const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const path = require('path')


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', function(req,res){
  res.render('index')
})

app.get('/nodes', (req, res) => {
  res.render('./../views/nodes')
})

app.listen(3000)