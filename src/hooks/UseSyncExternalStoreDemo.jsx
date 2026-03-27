import { useSyncExternalStore } from "react";

let count = 0;
let listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return () => (listeners = listeners.filter(l => l !== listener));
}

function getSnapshot() {
  return count;
}

function increment() {
  count++;
  listeners.forEach(l => l());
}

export default function App() {
  const countValue = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <>
      <h2>{countValue}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}