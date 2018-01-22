const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
	author: String,
	text: String,
	createdDate: Date
});

module.exports = mongoose.model('Post', PostsSchema);