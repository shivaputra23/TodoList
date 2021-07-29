import react, { useState } from "react";

function UseInputState(initialState = "") {
  const [state, setstate] = useState(initialState);
  const Data = (e) => {
    setstate(e.target.value);
  };
  const Reset = () => {
    setstate("");
  };
  return [state, Data, Reset];
}

export default UseInputState;
