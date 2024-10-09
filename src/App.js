import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const trafficLights = ["red", "yellow", "green"];
  const [signal, setSignal] = useState("red");

  useEffect(() => {
    const ind = (trafficLights.indexOf(signal) + 1) % trafficLights.length;
    const timer = signal === "yellow" ? 2000 : 5000;
    const nextSignal = trafficLights[ind];

    const interval = setInterval(() => {
      setSignal(nextSignal);
    }, timer);

    return () => clearInterval(interval);
  }, [signal]);

  return (
    <div className="App">
      <h4>Traffic Light</h4>
      <div className="traffic-lights" key="lights">
        {trafficLights.map((light) => (
          <div key={`traffic-signal-${light}`}>
            <div
              className={light === signal ? signal : "gray"}
              key={`signal-${light}`}
            >
              {light === signal ? signal : "gray"}
            </div>
          </div>
        ))}
      </div>

      <div className="selector">
        <label>Change the signal:</label>
        <select
          value={signal}
          onChange={(e) => {
            console.log("val", e.target.value);
            setSignal(e.target.value);
          }}
        >
          {trafficLights.map((light) => (
            <option value={light} key={light}>
              {light}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
