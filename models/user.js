const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	email: {type: String, unique: true, required: true},
	password: {type: String, min: 10, required: true},
	location: String,
	admin: Boolean,
	habits: Array
});

module.exports = mongoose.model('User', UsersSchema);