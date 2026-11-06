import express from "express";
import dogsRouter from "./routes/dogs.js";

const app = express();

// Assignment 3b and 3c ask you to add middleware in this file.

app.use("/", dogsRouter); // Do not remove this line

if (import.meta.main) {
  app.listen(3000, () => {
    console.log("Dog rescue app is listening on port 3000...");
  });
}

export default app;
