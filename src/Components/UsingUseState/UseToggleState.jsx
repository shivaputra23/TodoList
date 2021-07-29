import react, { useState } from "react";

function UseToggleState(initialState = false) {
  const [state, setstate] = useState(initialState);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
}

export default UseToggleState;
