import React from "react";
import { Paper } from "@material-ui/core";
import { List, Divider } from "@material-ui/core";
import Todo from "./Todo";
import UseTodoState from "./UseTodoState";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper style={{ padding: "1rem", border: "2px solid black" }}>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <>
                <Todo
                  id={todo.id}
                  task={todo.task}
                  key={todo.id}
                  completed={todo.completed}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {i < todos.length - 1 && <Divider />}
              </>
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
