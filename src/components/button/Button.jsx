import style from "./button.module.css";

export default function Button({ text, bgColor, type }) {
  return type === "download" ? (
    <>
      <a
        href="src/assets/Cerere_de_Finantare_WEBZOOFINAL.pdf"
        download
        style={{ textDecoration: "none" }}
      >
        <button className={style.button} style={{ backgroundColor: bgColor }}>
          {text}
        </button>
      </a>
    </>
  ) : (
    <>
      <button className={style.button} style={{ backgroundColor: bgColor }}>
        {text}
      </button>
    </>
  );
}
