const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Create a new todo in mongoDb
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update for is complete a todo
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ msg: 'Todo not found' });
    }
    await todo.deleteOne({_id: req.params.id});
    console.log(`THe id for deleteing ${todo}`);
    res.json({ msg: 'Todo removed' });
} catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
