import { useEffect, useState } from "react";

function useFetch(apiUrl) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [apiUrl]);

  return { data };
}

export default useFetch;
