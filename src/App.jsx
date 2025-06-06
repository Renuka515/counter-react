import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const App = () => {
  const [state, setState] = useState(0);

  const substract = () => {
    if (state > 0) {
      setState((prev) => prev - 1);
    }
  };
  const addition = () => {
    if (state < 10) {
      setState((prev) => prev + 1);
    }
  };
  const substracting = () => {
    setState((prev) => prev - 2);
  };
  const adding = () => {
    setState((prev) => prev + 2);
  };
  const reset = () => {
    setState(0);
    localStorage.clear();
    toast.info("Restarted successfully!");
  };
  const save = () => {
    localStorage.setItem("counterValue", state);
    toast.success("saved successfully!");
  };
  useEffect(() => {
    const counterValue = localStorage.getItem("counterValue");
    const parsedValue = parseInt(counterValue);
    if (parsedValue) {
      setState(paresedvalue);
    }
  }, []);
  return (
    <main className="container" style={{ marginTop: 80 }}>
      <header style={{ textAlign: "center" }}>
        <h1>Simple Counter</h1>
      </header>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <div
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            margin: "2rem 0",
          }}
        >
          {state}
        </div>

        <div className="grid">
          <button className="secondary" onClick={substract}>
            - 1
          </button>
          <button onClick={addition}>+ 1</button>
        </div>
        <div className="grid">
          <button className="secondary" onClick={substracting}>
            -2
          </button>
          <button onClick={adding}>+2</button>
        </div>
        <div>
          <button className="outline" onClick={reset}>
            Reset
          </button>
          <button className="contract " onClick={save}>save</button>
        </div>
      </section>
    </main>
  );
};
export default App;
