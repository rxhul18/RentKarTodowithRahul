import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import TodoItem from './TodoItem';
// import { fetchTodos } from '../redux/todoSlice';
import { fetchTodosData } from '../todos/todoThunks';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodosData());
  }, [dispatch]);

  if (loading) {
    return <div className='mt-2 container'>Loading...</div>;
  }

  if (error) {
    return <div className='mt-2 container'>Error: {error}</div>;
  }

  return (
    <div className='container mt-4'>
      <div className='row mx-0 w-100'>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
