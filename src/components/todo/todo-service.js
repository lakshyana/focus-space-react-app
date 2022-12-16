// import axios
import axios from 'axios';
import React from 'react'

// location of HTTP services
const API_BASE = 'http://localhost:4000/api';
const TODOS_API = `${API_BASE}/todos`;

// export functions
export const findAllTodos = async () => {
    // send HTTP GET request to TODO_API
    const response = await axios.get(TODOS_API);

    // extract JSON from response from server
    const todos = response.data;

    console.log("Service call response for todos data");
    console.log(todos);
    return todos; // return todos
}

export const createTodo = async (newTodo) => {
    const response = await axios.post(TODOS_API, newTodo);
    const actualTodo = response.data;
    return actualTodo;
}

export const findTodoById = async (tid) => {
    const response = await axios.get(`${TODOS_API}/${tid}`);
    const todo = response.data;
    return todo;
}



//update completed field of data for id in database
export const updateTodo = async (tid, todo) => {
    const response = await axios.put(
        `${TODOS_API}/${tid}`, todo);
    const todos = response.data;
    return todos;
}
// export const updateTodo = async (tid, completed) => {
//     const response = await axios.put(`${TODOS_API}/${tid}`, completed);
//     const status = response.data;
//     return status;
// }

export const deleteTodo = async (tid) => {
    const response = await axios.delete(`${TODOS_API}/${tid}`); // send HTTP DELETE request to server
    return response.data; // data contains response's status we'll ignore for now
}

// Path: src\components\todo\todo-controller.js
// Compare this snippet from todo\todo-controller.js:

