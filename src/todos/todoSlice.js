import { createSlice } from '@reduxjs/toolkit';
import { fetchTodosData , addTodoData , completeTodoData , deleteTodoData } from '../todos/todoThunks'; //importing all created thunks

const initialState = {
  todos: [],
  loading: false,
  error: null,
};


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodosData.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodosData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodoData.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(completeTodoData.fulfilled, (state, action) => {
        const index = state.todos
        .findIndex((todo) => todo._id === action.payload._id);
        state.todos[index] = action.payload;
      })
      .addCase(deleteTodoData.fulfilled, (state, action) => {
        state.todos = state.todos
        .filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
