const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/my-app-db',
  {
    useNeUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose.connection;