import React from 'react'
import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./todo-service";

export const createTodoThunk = createAsyncThunk(
    'todos/createTodo',
    async (newTodo) => {
        await service.createTodo(newTodo) // call service to create to-do
    // window.location.reload(false) //RELOAD PAGE FROM BROWSER CACHE
    return newTodo
}
)

export const findAllTodosThunk = createAsyncThunk(
    'todos/findAllTodos',
    async () => await service.findAllTodos()
)

export const updateTodoThunk = createAsyncThunk('todos/updateTodo',
    async (updatedTodo) => {
        await service.updateTodo(updatedTodo._id, updatedTodo) // call service to update to-do
        // console.log("todo thunks: ",updatedTodo)
    // window.location.reload(true) //RELOAD PAGE FROM BROWSER CACHE
    return updatedTodo// return updated to-do
}
)

export const deleteTodoThunk = createAsyncThunk(
    'todos/deleteTodo', // unique thunk identifier
    async (tid) => {  // thunk payload creator
        await service.deleteTodo(tid) // call service to delete to-do
    return tid // return tid to be used in reducer
})
