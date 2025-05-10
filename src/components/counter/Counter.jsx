import style from "./counter.module.css";
import { useTimerContext } from "../../context/TimerContext.jsx";

export default function Counter() {
  const { timeString } = useTimerContext();

  return (
    <div className={style.counterContainer}>
      <p>{timeString}</p>
    </div>
  );
}
