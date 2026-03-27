import { useCallback, useState } from "react";

function Button({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount((c) => c + 1), []);

  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </>
  );
}

export default UseCallbackDemo;
