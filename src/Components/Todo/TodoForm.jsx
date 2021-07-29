import React from "react";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import UseInputState from "../InputUseState/UseInputState";

function TodoForm({ addTodo }) {
  const [task, handleChange, reset] = UseInputState("");
  return (
    <>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(task);
            reset();
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            value={task}
            onChange={handleChange}
            label="Add New Todo"
          />
        </form>
      </Paper>
    </>
  );
}

export default TodoForm;
