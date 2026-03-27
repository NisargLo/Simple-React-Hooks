import { useDeferredValue, useState } from "react";

function UseDeferredValueDemo() {
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <p>{deferredSearchText}</p>
    </>
  );
}

export default UseDeferredValueDemo;