# todos-rest-api
 Basic demo API with get/post/patch/delete functionality

## What is it?
A simple **Node.js/MongoDB-based** REST API, managing a simple set of CRUD operations. Endpoitns accept JSON objects.

## Operations / Endpoints:
Creating and updating to-do list items require JSON objects in BODY of request, as specified:

* Read all existing to-do items: GET https://todos-rest-api-demo.onrender.com/todos
* Create new to-do item/s: POST https://todos-rest-api-demo.onrender.com/todos {text: 'Message content'}
* Update existing to-do item/s: PATCH https://todos-rest-api-demo.onrender.com/todos/id {text: 'Update message content'}
* Delete to-do item/s: DELETE https://todos-rest-api-demo.onrender.com/todos/id

## Security
CORS: Access-Control-Allow-Origin' from the domain of the Front-end GUI (below) only.

## Hosting:
The API is running [here](https://todos-rest-api-demo.onrender.com/todos) on Render.

A decoupled Front-end GUI for this API is running [here](https://shop-demo-node-js-express-mondodb.onrender.com).

The MongoDB database is hosted on MongoDB's Atlas Database.

## Front-end:
For more details on the workings of the Front-end, API, please see the repository [Readme](https://github.com/bauerindustries/vue-frontend-for-todo-api/edit/main/README.md).
