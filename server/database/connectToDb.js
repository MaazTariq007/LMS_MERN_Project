import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.CONNECTIONSTR;

const databaseConnection = async () => {
  try {
    const myDbConnection = await mongoose.connect(connectionString);
    console.log("Connected to the database");
    console.log(myDbConnection.connection.host); // Changed 'hostname' to 'host'
    console.log(myDbConnection.connection.name); // Database name
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default databaseConnection;
