//reducer is a function that takes in the current state and an action and returns a new state
import React from 'react'
import {createSlice} from "@reduxjs/toolkit";
import {createTodoThunk, deleteTodoThunk, findAllTodosThunk, updateTodoThunk} from "./todo-thunks";

const initialState = {
    todos: [],
    loading: false
}

const todoReducer = createSlice({
    name: 'todos',
    initialState: initialState,
    extraReducers: {
        [findAllTodosThunk.fulfilled]: (state, action) => {
            state.loading = false // turn off loading flag since we have the data
            state.todos = action.payload
        },
        [findAllTodosThunk.rejected]: (state, action) => {
            state.loading = false // reset loading flag, maybe use another flag to report error
        }   ,
        [createTodoThunk.fulfilled]: (state, action) => {
            state.loading = false // clear loading flag
            state.todos.push(action.payload)
        },

        [updateTodoThunk.fulfilled]: (state, action) => {
            state.loading = false // clear loading flag
            const idx = state.todos.findIndex(t => t._id === action.payload._id)
            state.todos[idx] = action.payload
        } ,

        [deleteTodoThunk.fulfilled]: (state, { payload }) => { // server response successful
            state.loading = false // clear loading flag
            state.todos = state.todos.filter(t => { // filter out item whose ID matches item to remove
                return t._id !== payload  //payload from action contains ID to remove
            })
        }
    }
})

export default todoReducer.reducer;


// [updateTodoThunk.fulfilled]: (state, action) => {
//     console.log("state: ", state)
//     console.log("action: ", action)
//     console.log("payload: ", action.payload)
//     state.loading = false // clear loading flag
//     const idx = state.todos.findIndex(t => t._id === action.payload._id)
//     state.todos[idx].completed = action.payload.completed
// }  ,
