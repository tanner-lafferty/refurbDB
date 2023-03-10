const express = require('express')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')

const refurbSchema = {
  customerName: String,
  returnDate: String,
  nodeId: String,
  failure: {
    antenna: { type: Boolean, required: true, default: false },
    battery: { type: Boolean, required: true, default: false },
    panel: { type: Boolean, required: true, default: false },
    groundPin: { type: Boolean, required: true, default: false },
    sdReader: { type: Boolean, required: true, default: false }
}
}

let Refurb = mongoose.model("Refurb", refurbSchema)

router.get('/', (req, res) => {
  res.render('./../views/new')
})

router.post("/", function(req, res) {
  let newRefurb = new Refurb({
    customerName: req.body.customerName,
    returnDate: req.body.returnDate,
    nodeId: req.body.nodeId,
    antenna: req.body.antenna
  })
  newRefurb.save()
  res.redirect("/")
})

    



module.exports = router