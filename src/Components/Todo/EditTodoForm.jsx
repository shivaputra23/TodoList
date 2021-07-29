import React from "react";
import UseInputState from "../InputUseState/UseInputState";
import { TextField } from "@material-ui/core";

function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
  const [value, handleChange, reset] = UseInputState(task);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value, task);
          reset();
          toggleEditForm();
        }}
        style={{ marginLeft: "1rem" }}
      >
        <TextField
          margin="normal"
          style={{ width: "20rem" }}
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default EditTodoForm;
