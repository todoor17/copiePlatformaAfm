import { createContext, useState, useContext, useRef, useEffect } from "react";

// Create a context for timer data
const TimerContext = createContext();

// Custom hook to use the timer context
export const useTimerContext = () => useContext(TimerContext);

// Provider component for the timer context
export const TimerProvider = ({ children }) => {
  const [timerRunning, setTimerRunning] = useState(true);
  const [timeString, setTimeString] = useState("00:00");
  const secondsRef = useRef(0);
  const minutesRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start the timer when the component mounts
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        secondsRef.current++;
        if (secondsRef.current === 60) {
          secondsRef.current = 0;
          minutesRef.current++;
        }
        let minutesString = minutesRef.current.toString().padStart(2, "0");
        let secondsString = secondsRef.current.toString().padStart(2, "0");
        let newTimeString = `${minutesString}:${secondsString}`;
        setTimeString(newTimeString);
      }, 1000);
    } else {
      // Stop the timer
      clearInterval(timerRef.current);
    }

    // Clear interval when component unmounts
    return () => clearInterval(timerRef.current);
  }, [timerRunning]);

  // Function to stop the timer
  const stopTimer = () => {
    setTimerRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    secondsRef.current = 0;
    minutesRef.current = 0;
    setTimeString("00:00");
    setTimerRunning(true);
  };

  return (
    <TimerContext.Provider
      value={{
        timerRunning,
        timeString,
        stopTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
