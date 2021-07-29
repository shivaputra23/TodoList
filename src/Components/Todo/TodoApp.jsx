import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useEffect } from "react";
import UseTodoState from "./UseTodoState";

function TodoApp() {
  const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  // const initialTodos = [
  //   { id: 1, task: "Cooking", completed: true },
  //   { id: 2, task: "Coding", completed: true },
  //   { id: 3, task: "Exercise", completed: false },
  // ];
  // const [todos, setTodos] = useState(initialTodos);
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    UseTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const addTodo = (newTodoText) => {
  //   setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  // };

  // const removeTodo = (todoId) => {
  //   const updateTodos = todos.filter((todo) => todo.id !== todoId);
  //   setTodos(updateTodos);
  // };
  // const toggleTodo = (todoId) => {
  //   const updateTodos = todos.map((todo) =>
  //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setTodos(updateTodos);
  // };
  // const editTodo = (todoId, newTask) => {
  //   const updateTodos = todos.map((todo) =>
  //     todo.id === todoId ? { ...todo, task: newTask } : todo
  //   );
  //   setTodos(updateTodos);
  // };
  return (
    <div>
      <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />

          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
