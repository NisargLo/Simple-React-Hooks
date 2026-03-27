import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const sumValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>sum = {sumValue}, count = {count}</p>
    </>
  );
}

export default UseMemoDemo;
