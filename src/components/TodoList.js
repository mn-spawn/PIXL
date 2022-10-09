/* crediting github: briancodex for to do functionality used his components
from https://github.com/briancodex/react-todo-app-v1 for to do section of this
react app */
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import TodoForm from './TodoForm';
import Todo from './Todo';
import ReviewState from "./ReviewState";

const data = []

function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate()

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    data.push(todo)
    console.log(data)

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };


  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <>
      <h1>Add your link!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />

      <button onClick={
        () => openInNewTab("/review")
        }>Review</button>
    </>
  );
}

export default TodoList;
