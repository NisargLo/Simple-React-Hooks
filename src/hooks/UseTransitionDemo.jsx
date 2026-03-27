import { useTransition, useState } from "react";

function UseTransitionDemo() {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;

    startTransition(() => {
      setText(inputValue);
    });
  }

  return (
    <>
      <input onChange={handleChange} />
      {isPending ? <p>Loading...</p> : <p>{text}</p>}
    </>
  );
}

export default UseTransitionDemo;