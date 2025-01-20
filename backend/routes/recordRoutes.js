const express = require('express');
const { getRecords, updateStatus } = require('../controllers/recordController');

const router = express.Router();

router.get('/records', getRecords);
router.put('/records/:id', updateStatus);

module.exports = router;