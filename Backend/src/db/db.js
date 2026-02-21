const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database");
    }
    catch (err) {
        console.log("Error connecting to the database", err);
        // process.exit(1); // Exit the process if there is error while connecting to the database
    }
}


module.exports = connectDB;