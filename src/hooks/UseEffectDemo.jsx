import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UseEffectDemo;
