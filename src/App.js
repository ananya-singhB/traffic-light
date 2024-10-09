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
      <div className="traffic-lights">
        {trafficLights.map((light) => (
          <div>
            <div className={light === signal ? signal : "gray"}>
              {light === signal ? signal : "gray"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
