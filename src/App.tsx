import { useState, useRef, useEffect } from "react";
import "./App.css";
import { Circle } from "./Circle/Circle";

function App() {
  const [active, setActive] = useState<"red" | "orange" | "green">("red");

  const redRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);

  const refs = [redRef, orangeRef, greenRef];

  useEffect(() => {
    redRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      e.preventDefault(); 
      const dir = e.shiftKey ? -1 : 1;
      const currentIndex = refs.findIndex((r) => r.current === document.activeElement);
      const from = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex = (from + dir + refs.length) % refs.length;
      refs[nextIndex].current?.focus();
    }
  };

  return (
    <div className="semaphore-container" onKeyDown={handleKeyDown}>
      <div className="semaphore-item">
        <Circle
          ref={redRef}
          color="red"
          active={active === "red"}
          onActivate={() => setActive("red")}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          ref={orangeRef}
          color="orange"
          active={active === "orange"}
          onActivate={() => setActive("orange")}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          ref={greenRef}
          color="green"
          active={active === "green"}
          onActivate={() => setActive("green")}
        />
      </div>
    </div>
  );
}

export default App;
