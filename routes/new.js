const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('./../views/new')
})

router.post('/', (req, res) => {
    
})

module.exports = router