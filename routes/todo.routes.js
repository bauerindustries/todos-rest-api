const express = require('express');
const todoController = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', todoController.getAllTodos);

router.post('/', todoController.addTodo);

router.patch('/:id', todoController.upDateTodo);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;
