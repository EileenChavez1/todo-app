const fs = require('fs')

function getTasks() {
  return JSON.parse(fs.readFileSync('tasks.json', 'utf8'))
}

function saveTasks(tasks) {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks))
}

function createTask(title) {
  const tasks = getTasks()
  tasks.push({ id: Date.now(), title: title, done: false })
  saveTasks(tasks)
}

function deleteTask(id) {
  const tasks = getTasks().filter(t => t.id != id)
  saveTasks(tasks)
}

module.exports = { getTasks, createTask, deleteTask }