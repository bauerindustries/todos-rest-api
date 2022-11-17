const { response } = require('express');
const Todo = require('../models/todo.model');

async function getAllTodos(req, res, next) {
  let todos;
  try {
    todos = await Todo.getAllTodos();
  } catch (error) {
    return next(error);
  }

  res.json({
    todos: todos,
  });
}

async function addTodo(req, res, next) {
  // post body required 'text' field
  const newTodo = new Todo(req.body.text);

  // let insertedId;
  // try {
  //   const result = await newTodo.save();
  //   insertedId = result.insertedId;
  // } catch (error) {
  //   return next(error);
  // }

  // newTodo.id = insertedId.toString();

  // res.json({ message: 'Successfully added new Todo', createdTodo: newTodo });

  let insertedId;
  try {
    const result = await newTodo.save();
    newTodo.id = result.insertedId.toString();
  } catch (error) {
    return next(error);
  }

  res.json({ message: 'Successfully added new Todo', createdTodo: newTodo });
}

async function upDateTodo(req, res, next) {
  const updatedTodo = new Todo(req.body.text, req.params.id);

  let response;
  try {
    response = await updatedTodo.save();
  } catch (error) {
    return next(error);
  }

  res.json({
    message: 'Successfully updated existing Todo',
    updatedTodo: response,
  });
}

function deleteTodo(req, res, next) {
  const deletedTodo = new Todo(null, req.params.id);

  let response;
  try {
    response = deletedTodo.delete();
  } catch (error) {}

  res.json({
    message: 'Successfully deleted Todo'
  });
}

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  upDateTodo: upDateTodo,
  deleteTodo: deleteTodo,
};
