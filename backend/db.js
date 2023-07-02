const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://user:test@cluster0.qagccn0.mongodb.net/Store?retryWrites=true&w=majority';

const mongoDB = async (callback) => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to DB');

    const food_items = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

    global.food_items = food_items;
    global.foodCategory = foodCategory;

  } catch (error) {
    throw new Error('Error connecting to MongoDB: ' + error.message);
  }
};

module.exports = mongoDB;
