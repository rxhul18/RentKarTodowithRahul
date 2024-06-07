import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
});
