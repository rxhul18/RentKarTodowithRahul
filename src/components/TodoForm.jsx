import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoData } from "../todos/todoThunks";
import '../scss/TodoForm.scss'

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoData({ title, description }));
    // setting the value blank for new todos
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="value-section row d-flex container p-3">
        <div className="input-section col-9 d-flex">
          <input
            type="text"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            className="desInput"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="button-part col-3">
          <button type="submit" className=" ">Add Todo</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
