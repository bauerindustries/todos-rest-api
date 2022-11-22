# To-do list REST API
A demonstration REST API, managing a simple set of CRUD operations for a simple to-do list. There is also a decoupled front end for this API linked below.

## Technologies used:
* Node.js
* Express.js
* MongoDB

## Operations / Endpoints:
Creating and updating to-do list items require JSON objects in the body of request methods, as specified, where **id** is the unique id of a mongoDB document:

* Read all existing to-do items: GET https://todos-rest-api-demo.onrender.com/todos
* Create new to-do item/s: POST https://todos-rest-api-demo.onrender.com/todos {text: 'Message content'}
* Update existing to-do item/s: PATCH https://todos-rest-api-demo.onrender.com/todos/id {text: 'Update message content'}
* Delete to-do item/s: DELETE https://todos-rest-api-demo.onrender.com/todos/id

## Security
CORS: Access-Control-Allow-Origin from the domain of the [Front-end GUI](https://todos-rest-api-demo.onrender.com/todos) only.

## Hosting:
The API is running [here](https://todos-rest-api-demo.onrender.com/todos) on Render.

A decoupled Front-end GUI for this API is running [here](https://cute-peony-3eb499.netlify.app).

The MongoDB database is hosted on MongoDB's Atlas Database.

## Requirements:
* Environmental variable MONGODB_URL for database connection string
* Environmental variable ALLOWED_DOMAINS for domain/s permitted to connect to this API

## Front-end:
For more details on the workings of the Front-end, API, please see the repository [Readme](https://github.com/bauerindustries/vue-frontend-for-todo-api/edit/main/README.md).


## Notes
This project was built as a late-stage module/project on [100 Days of Code - Web Development Bootcamp](https://www.udemy.com/course/100-days-of-code-web-development-bootcamp/).
