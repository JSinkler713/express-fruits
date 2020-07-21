const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/express-fruit'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(()=> {
    console.log('fruits mongodb connected');
  })
  .catch((err)=> {
    console.log(`MongoDb connection error: ${err}`);
  })

module.exports = {
  Fruit: require('./Fruit'),
};
