import { useState } from "react";
import TodoCreate from "../components/layout/TodoCreate";
import TodoList from "../components/layout/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title: title, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const changeTodo = (id, title, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate createTodo={createTodo} />
    </div>
  );
};

export default TodoApp;
