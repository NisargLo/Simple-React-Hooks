import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Submit</button>;
}

function UseFormStatusDemo() {
  return (
    <form action={async () => {
      await fetch("apiUrl");
      // code which may take time
    }}>
      <input type="text" name="arjun" />
      <SubmitButton />
    </form>
  );
}

export default UseFormStatusDemo;
