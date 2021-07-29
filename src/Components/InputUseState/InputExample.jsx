import React, { useState } from "react";
import UseInputState from "./UseInputState";

function InputExample() {
  const [Email, setEmail, resetEmail] = UseInputState("");
  const [Password, setPassword, resetPassword] = UseInputState("");
  return (
    <div>
      <h1>
        Email : {Email} & Password : {Password}{" "}
      </h1>
      <input type="text" value={Email} onChange={setEmail} />
      <input type="password" value={Password} onChange={setPassword} />
      <button onClick={resetEmail}>Reset</button>
      <button onClick={resetPassword}>Reset</button>
    </div>
  );
}

export default InputExample;
