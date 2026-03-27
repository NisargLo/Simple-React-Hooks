import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </>
  );
}

export default UseReducerDemo;
