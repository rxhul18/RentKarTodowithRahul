import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodoData,deleteTodoData } from '../todos/todoThunks';
import '../scss/TodoItem.scss'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodoData({ id: todo._id, updates: { ...todo, completed: !todo.completed } }));
  };

  const handleDelete = () => {
    dispatch(deleteTodoData(todo._id));
  };

  return(
    <div className='row todo-list-card'>
      <div className='col-12 details-part col-sm-12 col-md-8 col-xl-8'>
      <h4 className={todo.completed ? 'line-strike': null}>
        {todo.title}
      </h4>
      <p className={todo.completed ? 'para-strike':null}>{todo.description}</p>
      </div>
      <div className='col-12 button-part col-sm-12 col-md-4 col-xl-4'>
          <button onClick={handleComplete} className='complete-undo-button'>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={handleDelete} className='delete-button'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem;