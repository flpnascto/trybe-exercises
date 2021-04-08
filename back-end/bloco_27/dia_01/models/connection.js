const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1';

const connection = () => {
  return MongoClient
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit();
    })
}

module.exports = connection;