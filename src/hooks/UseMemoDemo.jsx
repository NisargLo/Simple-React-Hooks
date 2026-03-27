import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [something, setSomething] = useState(0);

  const dataNew = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <>
      <button onClick={() => setSomething(something + 1)}>Increment</button>
      <p>sum = {dataNew} - something = {something}</p>
    </>
  );
}

export default UseMemoDemo;
