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
    //Adding case for during we fetch the data and loading is true - fetchPart
      .addCase(fetchTodosData.pending, (state) => {
        state.loading = true;
      })
    //Adding case for which data fetch perfectly and do loading false  - fetchPart
    .addCase(fetchTodosData.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    })
    //Adding case for when data not loaded perfectly or have any error and do loading false  - fetchPart
      .addCase(fetchTodosData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    // Adding case for todo in list 
      .addCase(addTodoData.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
    // Adding case for completeTodo
      .addCase(completeTodoData.fulfilled, (state, action) => {
        const index = state.todos
        .findIndex((todo) => todo._id === action.payload._id);
        state.todos[index] = action.payload;
      })
    // Adding case for Deleting todo from list
      .addCase(deleteTodoData.fulfilled, (state, action) => {
        state.todos = state.todos
        .filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
