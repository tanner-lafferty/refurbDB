const express = require('express')
const methodOverride = require('method-override')
const app = express()
const path = require('path')

const nodesRoute = require('./routes/nodes')
app.use('/nodes', nodesRoute)

const newRoute = require('./routes/new')
app.use('/new', newRoute)

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://tannerllafferty:Redwall123@refurbdb0.jx3odqa.mongodb.net/?retryWrites=true&w=majority"

main().catch(err => console.log(err))
async function main() {
    await mongoose.connect(mongoDB)
}


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', function(req,res){
  res.render('index')
})


app.listen(3000, () => {
  console.log("Server Running")
})