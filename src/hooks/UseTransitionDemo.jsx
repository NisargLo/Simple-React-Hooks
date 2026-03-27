import { useTransition, useState } from "react";

function UseTransitionDemo() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
    startTransition(() => {
      let tempData = [];
      for (let i = 0; i < 10000; i++) {
        tempData.push(e.target.value);
      }
      setData(tempData);
    });
  }

  return (
    <>
      <input onChange={handleChange} value={value} />
      {data.map((d, i) => <li key={i}>{d}</li>)}
    </>
  );
}

export default UseTransitionDemo;
