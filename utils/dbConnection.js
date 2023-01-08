const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const { connection } = mongoose;

async function initConnection() {
  if (connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });
      connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
      console.log('Connected to MongoDB!');
    } catch (error) {
      console.error(error);
    }
  }
  return connection;
}

module.exports = { initConnection };
