import { useCallback, useState } from "react";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default UseCallbackDemo;