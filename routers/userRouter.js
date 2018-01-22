const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', (req, res) => {
	res.send('Made GET request');
});

router.post('/', (req, res) => {
	// putting something in the db using user model
	const newUser = new User();
	newUser.email = 'foo@bar.com';
	newUser.password = 'all-the-secrets';
	newUser.save(function (error, savedData) {
		if (error) {
			res.send(error);
		}
		else {
			res.json(savedData);
		}
	});
});

router.put('/', (req, res) => {
	res.send('Made PUT request');
});

router.delete('/', (req, res) => {
	res.send('Made DELETE request');
});

module.exports = router;