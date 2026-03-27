import { useActionState } from "react";

function increment(prevState, formData) {
  console.log(formData.get("FirstName"));
  return prevState + 1;
}

function UseActionStateDemo() {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
      {state}
      <input type="text" name="FirstName" />
      <button formAction={formAction}>Increment</button>
    </form>
  );
}

export default UseActionStateDemo;
