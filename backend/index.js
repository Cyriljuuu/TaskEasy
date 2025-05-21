const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const listDao = require("./data/list");
const taskDao = require("./data/task");

app.get("/list", (req, res) => {
  res.json(listDao.list());
});

app.post("/list", (req, res) => {
  const newList = listDao.create(req.body);
  res.json(newList);
});

app.get("/list/:id", (req, res) => {
  const list = listDao.get(req.params.id);
  if (!list) return res.status(404).send("List not found");
  res.json(list);
});

app.put("/list/:id", (req, res) => {
  const updated = listDao.update(req.params.id, req.body);
  if (!updated) return res.status(404).send("List not found");
  res.json(updated);
});

app.delete("/list/:id", (req, res) => {
  listDao.remove(req.params.id);
  res.status(204).send();
});

app.get("/task", (req, res) => {
  res.json(taskDao.list());
});

app.post("/task", (req, res) => {
  const newTask = taskDao.create(req.body);
  res.json(newTask);
});

app.get("/task/:id", (req, res) => {
  const task = taskDao.get(req.params.id);
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
});

app.put("/task/:id", (req, res) => {
  const updated = taskDao.update(req.params.id, req.body);
  if (!updated) return res.status(404).send("Task not found");
  res.json(updated);
});

app.delete("/task/:id", (req, res) => {
  taskDao.remove(req.params.id);
  res.status(204).send();
});

app.get("/", (req, res) => {
  res.send("TaskEasy backend běží!");
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
