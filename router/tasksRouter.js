const Router = require("express").Router;
const { Task } = require("../db");
const { validateTask } = require("../utils/validators");

const router = Router();

router
  .get("/", async (req, res) => {
    const tasks = await Task.getAll();

    res.send(tasks);
  })
  .get("/:id", async (req, res) => {
    const task = await Task.getById(req.params.id);
    if (!task) res.status(404).send();

    res.send(task);
  })
  .post("/", async (req, res) => {
    const isValid = await validateTask(req.body);
    if (!isValid) res.status(400).send();
    const newTask = await Task.create(req.body);

    res.status(201).send(newTask);
  })
  .post("/:id", async (req, res) => {
    const taskToEdit = await Task.getById(req.params.id);
    if (!taskToEdit) res.status(404).send();

    const updatedTask = await Task.update({ ...taskToEdit, ...req.body });

    res.status(200).send(updatedTask);
  });

module.exports = router;
