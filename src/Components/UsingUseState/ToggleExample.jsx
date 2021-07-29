import React, { useState } from "react";
import UseToggleState from "./UseToggleState";

function ToggleExample() {
  const [isComplete, toggleisComplete] = UseToggleState(true);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = UseToggleState(false);
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  return (
    <div>
      <h1 onClick={toggleisComplete}>{isComplete ? "hai" : "bye"}</h1>
      <h1 onClick={setFruit}>{fruit ? "banana" : "apple"}</h1>
      {/* <button onClick={() => setcount(count + 1)}>Click Me</button>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount("hello")}>text</button> */}
    </div>
  );
}

export default ToggleExample;
