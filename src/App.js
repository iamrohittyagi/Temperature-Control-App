import "./App.css";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const Increment = () => {
    if (temp < 30) {
      if (temp > 16) {
        setTempColor("hot");
      }
      setTemp(temp + 1);
    }
  };

  const Decrement = () => {
    if (temp > 0) {
      if (temp < 16) {
        setTempColor("cold");
      }
      setTemp(temp - 1);
    }
  };

  return (
    <div className="App">
      <div className="remote-controller">
        <div className="temp-display-container">
          <div className={`temp-display ${tempColor}`}>{temp}°C</div>
        </div>
        <div className="button-container">
          <button onClick={Increment}>+</button>
          <button onClick={Decrement}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
