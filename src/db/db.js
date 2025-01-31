import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectToDatabase = async () => {
  try {
    // console.log("Starting To Connect To The Database...");
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `Connected to the database successfully.!!!! HOST ::: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection FAILED: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
