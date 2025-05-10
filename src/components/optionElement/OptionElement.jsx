import style from "./optionElement.module.css";
import { useNavigate } from "react-router-dom";

export default function OptionElement({ title, content, navigateTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className={style.elementContainer} onClick={handleClick}>
      <div className={style.text}>{title}</div>
      <div>{content}</div>
    </div>
  );
}
