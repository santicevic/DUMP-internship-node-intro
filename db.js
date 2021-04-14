// DB mock
const tasks = [
  {
    id: 1,
    date: new Date(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    done: true,
  },
  {
    id: 2,
    date: new Date(),
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    done: false,
  },
];

const task = {
  getAll: () => Promise.resolve(tasks),
  getById: (id) => Promise.resolve(tasks.find((task) => task.id === +id)),
  create: (task) => Promise.resolve({ id: tasks.length + 1, ...task }),
  update: (task) => Promise.resolve(task),
};

module.exports.Task = task;
