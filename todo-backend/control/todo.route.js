const express = require("express");
const { TodoModel } = require("../model/todo.model");
const TodoRouter = express.Router();

// read
TodoRouter.get("/", async (req, res) => {
  let quary = req.query;
  try {
    let data = await TodoModel.find(quary);
    res.json({
      message: "here your data",
      data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

TodoRouter.get("/:id", async (req, res) => {
  let {id}= req.params;
  try {
    let data = await TodoModel.find({_id:id});
    res.json({
      message: "here your data",
      data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//create
TodoRouter.post("/", async (req, res) => {
  try {
    let data = new TodoModel(req.body);
    await data.save();
    res
      .status(201)
      .json({ message: "data has been succesfully created!", data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//update
TodoRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    let data = await TodoModel.findByIdAndUpdate({ _id: id }, payload);
    res.json({ message: "successfully update", data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete
TodoRouter.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let deleted_data = await TodoModel.find({ _id: id });
    await TodoModel.findByIdAndDelete({ _id: id });
    res.json({
      message: "successfully deleted!",
      data: deleted_data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  TodoRouter,
};
