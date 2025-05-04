const tasks = [];

const taskDao = {
  create(task) {
    const newTask = {
      id: Date.now().toString(),
      name: task.name,
      done: task.done ?? false,
      listId: task.listId,
      dueDate: task.dueDate,
    };

    tasks.push(newTask);
    return newTask;
  },
  get(id) {
    return tasks.find((t) => t.id === id);
  },
  list() {
    return tasks;
  },
  update(id, updatedTask) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;
    tasks[index] = { ...tasks[index], ...updatedTask };
    return tasks[index];
  },
  remove(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) tasks.splice(index, 1);
  },
};

module.exports = taskDao;
