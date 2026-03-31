import { useInsertionEffect } from "react";

function UseInsertionEffectDemo() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = ".box { color: red; }";
    document.head.appendChild(style);
  }, []);

  return <div className="box">Red Text</div>;
}

export default UseInsertionEffectDemo;
