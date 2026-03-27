import { useRef } from "react";

function UseRefDemo() {
  const ref = useRef();

  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={() => console.log(ref.current.value)}>Click</button>
    </>
  );
}

export default UseRefDemo;
