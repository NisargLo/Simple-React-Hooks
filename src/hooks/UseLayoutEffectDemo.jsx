import { useLayoutEffect, useRef } from "react";

function UseLayoutEffectDemo() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, []);

  return <div ref={divRef}>Measure me!</div>;
}

export default UseLayoutEffectDemo;
