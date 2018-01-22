const express = require('express');
const router = express.Router();

const {Users} = require('../models/user.js');

router.get('/', (req, res) => {
	res.send('Made GET request');
});

router.post('/', (req, res) => {
	res.send('Made POST request');
});

router.put('/', (req, res) => {
	res.send('Made PUT request');
});

router.delete('/', (req, res) => {
	res.send('Made DELETE request');
});

module.exports = router;