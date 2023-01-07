const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const mongoDB = 'mongodb://127.0.0.1/xshipment';
const { connection } = mongoose;

async function getInstance() {
  if (connection.readyState !== 1) {
    try {
      await mongoose.connect(mongoDB, { useNewUrlParser: true });
      connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
      console.log('Connected to MongoDB!');
    } catch (error) {
      console.error(error);
    }
  }
  return connection;
}

module.exports = { getInstance };
