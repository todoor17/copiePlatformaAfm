import style from "./infobox.module.css";

export default function InfoBox({ title, content, color }) {
  return (
    <div className={style.infoBoxContainer} style={{ backgroundColor: color }}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{content}</div>
    </div>
  );
}
