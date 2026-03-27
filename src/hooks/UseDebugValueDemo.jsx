import { useDebugValue } from "react";

function useFetch(apiUrl) {
  // ... fetch logic ...
  useDebugValue(apiUrl);
  // ... return data ...
}

export default useFetch;
