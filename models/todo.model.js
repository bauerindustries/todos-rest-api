const mongodb = require('mongodb');
const db = require('../data/database');

class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  static async getAllTodos() {
    const todoDocuments = await db
      .getDb()
      .collection('todos')
      .find()
      .sort({ _id: -1 })
      .toArray();
    // return todoDocuments.map(function (todoDocument) {
    //   return new Todo(todoDocument.text, todoDocument.id);
    // });
    return todoDocuments;
  }

  save() {
    if (this.id) {
      const toDoId = new mongodb.ObjectId(this.id);
      return db
        .getDb()
        .collection('todos')
        .updateOne({ _id: toDoId }, { $set: { text: this.text } });
    } else {
      // return promise
      return db.getDb().collection('todos').insertOne({ text: this.text });
    }
  }

  delete() {
    if (!this.id) {
      throw new Error('Trying to delete Todo without id!');
    }

    const toDoId = new mongodb.ObjectId(this.id);
    return db.getDb().collection('todos').deleteOne({ _id: toDoId });
  }
}

module.exports = Todo;
