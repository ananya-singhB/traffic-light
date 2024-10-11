import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const initialSettings = {
    "red": {
      next: 'yellow',
      timer: 5000,
      active: "red"
    },
    "yellow": {
      next: 'green',
      timer: 2000,
      active: "yellow"
    },
    "green": {
      next: 'red',
      timer: 5000,
      active: "green"
    }
  }
  const [signal, setSignal] = useState(initialSettings.red);
  const [customisedSignal, setCustomisedSignal] = useState({})

  useEffect(() => {
    const nextSignal = signal?.next;
    const timer = signal.timer
    const interval = setInterval(() => {
      setSignal(initialSettings[nextSignal]);
    }, timer);

    return () => clearInterval(interval);
  }, [signal]);

  const handleSetCutomsignal = (e) => {
    const toSetSignal = e.target.value;
    setCustomisedSignal((prev) => ({ ...prev, active: toSetSignal, next: initialSettings[toSetSignal].next }))
  }

  return (
    <div className="App">
      <h4>Traffic Light</h4>
      <div className="traffic-lights" key="lights">
        {Object.keys(initialSettings).map((light) => (
          <div key={`traffic-signal-${light}`}>
            <div
              className={light === signal?.active ? signal?.active : `gray-${light}`}
              key={`signal-${light}`}
            >
              {light}
            </div>
          </div>
        ))}
      </div>

      <div className="selector">
        <label>Change the signal:</label>
        <div className="custom-signal">
          <select
            value={customisedSignal?.active || ""}
            onChange={handleSetCutomsignal}
          >
            <option value="" disabled>Select an option</option>
            {Object.keys(initialSettings).map((light) => (
              <option key={light} value={light}>
                {light}
              </option>
            ))}
          </select>
          <input min={1} max={60} placeholder="timer(in sec)" type="number" value={customisedSignal?.timer ? customisedSignal?.timer / 1000 : 0} onChange={(e) => setCustomisedSignal((prev) => ({ ...prev, timer: e.target.value * 1000 }))} />
          <button type="button"
            disabled={!customisedSignal?.active && customisedSignal.timer}
            className={customisedSignal?.active && customisedSignal.timer ? 'active' : 'disabled'}
            onClick={() => {
              setSignal(customisedSignal);
              setCustomisedSignal({})
            }}
          >Set Signal
          </button>
        </div>
      </div>
    </div>
  );
}
