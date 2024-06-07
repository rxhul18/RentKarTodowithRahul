import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// here we are creating thunks as per requriment

// Fetch thunks will use for fetch all stored card lsit
const fetchTodosData = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('http://localhost:9000/api/todos');
    return response.data;
});

// add then is used for item from form
const addTodoData = createAsyncThunk('todos/addTodo', async (todo) => {
    const response = await axios.post('http://localhost:9000/api/todos', todo);
    return response.data;
});

// complete thunks is for to show the todo is complete or undo
const completeTodoData = createAsyncThunk('todos/updateTodo', async ({ id, updates }) => {
    const response = await axios.put(`http://localhost:9000/api/todos/${id}`, updates);
    return response.data;
});

// delete thunks is used for delete item from list
const deleteTodoData = createAsyncThunk('todos/deleteTodo', async (id) => {
    await axios.delete(`http://localhost:9000/api/todos/${id}`);
    return id;
});

export {
    fetchTodosData,
    addTodoData,
    completeTodoData,
    deleteTodoData
}