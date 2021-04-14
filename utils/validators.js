const yup = require("yup");

const taskSchema = yup.object().shape({
  date: yup.date().required(),
  text: yup.string(),
  done: yup.bool().required(),
});

const validateTask = (task) => taskSchema.isValid(task);

module.exports = {
  validateTask,
};
