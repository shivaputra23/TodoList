import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "../src/Components/Todo/TodoApp";
import { ThemeContext } from "../src/Components/Todo/Theme";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Box, Button, Typography } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Box display="flex" marginTop="1rem" justifyContent="center">
        <Typography
          variant="h4"
          // style={{ background: "white", color: "black" }}
        >
          TodoList App{" "}
        </Typography>
        <Button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }}
        >
          {!dark ? <Brightness7Icon color="white" /> : <Brightness4Icon />}
        </Button>
      </Box>
      <TodoApp />
    </div>
  );
}

export default App;
