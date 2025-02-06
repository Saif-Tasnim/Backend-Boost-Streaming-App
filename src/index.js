import dotenv from "dotenv";
import connectToDatabase from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// console.log("starting the backend .....\n");
const port = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    app.on("error", (err) => {
      console.log(err);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED: ", error);
  });

/*

This is also an approach to connect to the database in professional projects.

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.error("Express error: ", err);
      throw new Error(err);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw new Error(error);
  }
})();

*/
