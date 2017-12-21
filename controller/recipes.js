// import { error } from 'util';

const express = require('express')
const db = require('../db/connection')
const Recipe = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('You See Me')
})

module.exports = router
