const express = require('express')
const app = express()
const db = require('./tasks.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('.'))

// Pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/add', (req, res) => {
  res.sendFile(__dirname + '/add.html')
})

// CRUD routes
app.get('/tasks', (req, res) => {
  res.json(db.getTasks())
})

app.post('/tasks', (req, res) => {
  db.createTask(req.body.title)
  res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
  db.deleteTask(req.params.id)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})