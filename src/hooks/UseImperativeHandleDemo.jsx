import { useRef, useImperativeHandle, forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} placeholder={props.placeholder} />;
});

export default function UseImperativeHandleDemo() {
  const ref = useRef();

  return (
    <>
      <MyInput ref={ref} placeholder="Click button to focus here."/>
      <button onClick={() => ref.current.focus()}>
        Focus
      </button>
    </>
  );
}