import { useState } from "react";
import UseStateDemo from "./hooks/UseStateDemo";
import UseEffectDemo from "./hooks/UseEffectDemo";
import UseContextDemo from "./hooks/UseContextDemo";
import UseActionStateDemo from "./hooks/UseActionStateDemo";
import UseFormStatusDemo from "./hooks/UseFormStatusDemo";
import UseCallbackDemo from "./hooks/UseCallbackDemo";
import UseMemoDemo from "./hooks/UseMemoDemo";
import UseRefDemo from "./hooks/UseRefDemo";
import UseTransitionDemo from "./hooks/UseTransitionDemo";
import UseDeferredValueDemo from "./hooks/UseDeferredValueDemo";
import UseImperativeHandleDemo from "./hooks/UseImperativeHandleDemo";
import UseLayoutEffectDemo from "./hooks/UseLayoutEffectDemo";
import UseOptimisticDemo from "./hooks/UseOptimisticDemo";
import UseReducerDemo from "./hooks/UseReducerDemo";
import UseSyncExternalStoreDemo from "./hooks/UseSyncExternalStoreDemo";
import UseIdDemo from "./hooks/UseIdDemo";
import UseInsertionEffectDemo from "./hooks/UseInsertionEffectDemo";
import UseHookDemo from "./hooks/UseHookDemo";


const hooks = [
  { name: "useState", component: UseStateDemo },
  { name: "useEffect", component: UseEffectDemo },
  { name: "useContext", component: UseContextDemo },
  { name: "useActionState", component: UseActionStateDemo },
  { name: "useFormStatus", component: UseFormStatusDemo },
  { name: "useCallback", component: UseCallbackDemo },
  { name: "useMemo", component: UseMemoDemo },
  { name: "useRef", component: UseRefDemo },
  { name: "useTransition", component: UseTransitionDemo },
  { name: "useDeferredValue", component: UseDeferredValueDemo },
  { name: "useImperativeHandle", component: UseImperativeHandleDemo },
  { name: "useLayoutEffect", component: UseLayoutEffectDemo },
  { name: "useOptimistic", component: UseOptimisticDemo },
  { name: "useReducer", component: UseReducerDemo },
  { name: "useSyncExternalStore", component: UseSyncExternalStoreDemo },
  { name: "useId", component: UseIdDemo },
  { name: "useInsertionEffect", component: UseInsertionEffectDemo },
  { name: "use", component: UseHookDemo },

];

function App() {
  const [selected, setSelected] = useState(0);
  const SelectedComponent = hooks[selected].component;

  return (
    <div>
      <h1>React Hooks</h1>
      <div>
        {hooks.map((hook, i) => (
          <button
            key={hook.name}
            onClick={() => setSelected(i)}
            style={{ fontWeight: selected === i ? "bold" : "normal", margin: "2px" }}
          >
            {hook.name}
          </button>
        ))}
      </div>
      <hr />
      <SelectedComponent />
    </div>
  );
}

export default App;
