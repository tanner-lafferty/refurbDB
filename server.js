const express = require('express')
const methodOverride = require('method-override')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const mongoose = require('mongoose')
const newRouter = require('./routes/new')



mongoose.connect("mongodb+srv://tannerllafferty:Redwall123@refurbdb0.jx3odqa.mongodb.net/?retryWrites=true&w=majority")

const refurbSchema = {
  customerName: String,
  returnDate: String,
  nodeId: String,
  failure: String
}



const nodesRoute = require('./routes/nodes')
app.use('/nodes', nodesRoute)

const newRoute = require('./routes/new')
app.use('/new', newRoute)




app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', function(req,res){
  res.render('index')
})


app.use('/new', newRouter)



app.listen(3000, () => {
  console.log("Server Running")
})