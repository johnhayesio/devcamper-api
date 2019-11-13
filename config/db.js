const mongoose = require("mongoose");

const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  console.log(`MongoDB Connected: ${db.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
