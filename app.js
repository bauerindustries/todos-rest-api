const express = require('express');

const db = require('./data/database');

const app = express();

const todoRoutes = require('./routes/todo.routes');

const enablecCors = require('./middleware/cors.middleware');

// parses incoming responses for json
app.use(express.json());

app.use(enablecCors);

app.use('/todos', todoRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: 'Something went wrong!',
  });
});

db.initDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Connecting to the database failed!');
  });
