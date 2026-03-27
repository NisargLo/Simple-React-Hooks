import { useRef, useImperativeHandle } from "react";

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() { inputRef.current.focus(); }
    };
  }, []);

  return <input {...props} ref={inputRef} />;
}

function UseImperativeHandleDemo() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>Edit</button>
    </form>
  );
}

export default UseImperativeHandleDemo;
