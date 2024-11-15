const mongoose = require("mongoose"); //import the Mongoose database
require("dotenv").config(); //to keep sensitive information like database credentials or API keys, and allows the app to use these values without exposing them directly in the code.
const { DB_PASSWORD, DB_USERNAME } = process.env; //to display at the d

const connect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.fyh29.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    //(127.0.0.1 is localhost) and (27017 is the default MongoDB port)
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(`Error connecting to MongoDB: ${e.message}`);
  }
};

module.exports = connect; // "Hey, anyone who needs to make a database call, you can use this tool (connect function) I just created."
