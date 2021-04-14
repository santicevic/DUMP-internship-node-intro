const express = require("express");
const tasksRouter = require("./tasksRouter");

const router = express.Router();

router.use(express.json());

router.use("/tasks", tasksRouter);

module.exports = router;
