import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState("");
  const [count, setCount] = useState(false);

  useEffect(() => {
    if (count && timer > 0) {
      setTimeout(() => {
        if (timer <= 0) setCount(false);
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer, count]);

  const handleSetTimer = (e) => {
    e.preventDefault();
    const sec = parseInt(e.target.value);
    if (sec) setTimer(sec);
  };

  const handleStartCount = (e) => {
    e.preventDefault();
    if (timer > 0) setCount(true);
  };

  return (
    <div>
      <form onSubmit={handleStartCount}>
        <label htmlFor="secInput">Number of seconds:</label>
        <input
          id="secInput"
          type="text"
          value={timer}
          onChange={handleSetTimer}
        />
        <button>Start counting down</button>
      </form>
    </div>
  );
};

export default Timer;
