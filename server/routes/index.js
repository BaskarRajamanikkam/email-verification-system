const express = require('express');

const router = express.Router();


router.use('/auth',require('./AuthRoutes'));



module.exports = router;