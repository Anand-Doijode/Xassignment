const mongoose = require('mongoose');
// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/xshipment';
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get the default connection
const { connection } = mongoose;
// Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;
