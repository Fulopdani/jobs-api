const mongoose = require('mongoose')

// 6os mongooseban true, 7esben mar false lesz es warningot dobott
mongoose.set('strictQuery', false);


const connectDB = (url) => {
  return mongoose
  .connect(url)
  .then(() => console.log('CONNECTED TO THE DB...'))
  .catch((err) => console.log(err));
}

module.exports = connectDB;