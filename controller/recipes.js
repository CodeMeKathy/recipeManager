const express = require('express')
const Recipe = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Recipe.find({})
    .then((recipes) => {
      //incomplete will return 
    })
})
