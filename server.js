const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(morgan('common'));
app.use(express.static('public'));

const postRouter = require('./routers/postsRouter');
const userRouter = require('./routers/userRouter');

app.use('/posts', postRouter);
app.use('/user', userRouter);

let server;

function runServer() {
	const port = process.env.PORT || 8080;
	return new Promise((resolve, reject) => {
		//Put here because we're starting up server and connecting app to DB (used to store data)
		mongoose.connect(process.env.DATABASE_URL);
		server = app.listen(port, () => {
			console.log(`Your app is listening on port ${port}`);
			resolve(server);
		}).on('error', err => {
			reject(err)
		});
	});
}

function closeServer() {
	return new Promise((resolve, reject) => {
		console.log('Closing server');
		server.close(err => {
			if(err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}

if(require.main === module) {
	runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};