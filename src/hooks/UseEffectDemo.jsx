import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count: " + count)
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UseEffectDemo;
