const express = require('express');
const pollController = require('../controller/pollController');

const router = express.Router();

router
  .route('/')
  .get(pollController.getAllPolls)
  .post(pollController.createPoll);

module.exports = router;
