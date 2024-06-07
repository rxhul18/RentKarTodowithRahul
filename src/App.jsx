import { useState } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import { store } from "./redux/store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="main-app d-block">
        <h1 className="title">My <span>Todo</span>s</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
