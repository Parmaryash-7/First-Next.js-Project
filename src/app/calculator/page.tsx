"use client";

import { useState } from "react";
// import "./calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <div className="calculator-display">
          {input || "0"}
        </div>
        <div className="calculator-buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
              className="calculator-button"
            >
              {btn}
            </button>
          ))}
          <button onClick={handleClear} className="calculator-button clear">
            Clear
          </button>
          <button onClick={handleBackspace} className="calculator-button backspace">
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
}
