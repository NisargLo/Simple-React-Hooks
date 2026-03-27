import { useDeferredValue, useEffect, useState } from "react";

function UseDeferredValueDemo() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);

  useEffect(() => {
    let formattedData = [];
    for (let i = 0; i < 10000; i++) {
      formattedData.push(deferredSearchText);
    }
    setData(formattedData);
  }, [deferredSearchText]);

  return (
    <>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <ul>
        {data.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </>
  );
}

export default UseDeferredValueDemo;
