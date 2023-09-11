const express = require("express");
const cors = require("cors");
const app = express();
const { connection } = require("./databse");
const { TodoRouter } = require("./control/todo.route");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/todo", TodoRouter);

app.listen(process.env.port, async () => {
  try {
    console.log(`server is running here at ${process.env.port}`);
    await connection;
    console.log("connected to database");
  } catch (error) {
    console.log("something went wrong!");
  }
});
