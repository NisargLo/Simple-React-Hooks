import { useId } from "react";

function UseIdDemo() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>User Email:</label>
      <input id={id} type="email" />
      <p>The ID generated and used for this input is: <b>{id}</b></p>
    </div>
  );
}

export default UseIdDemo;
