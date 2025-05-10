import style from "./firstPage.module.css";
import { content1, content2 } from "../../assets/text.js";
import Header from "../../components/header/Header.jsx";
import OptionElement from "../../components/optionElement/OptionElement.jsx";

export default function FirstPage() {
  return (
    <div>
      <div className={style.headerContainer}>
        <Header />
      </div>
      <div className={style.contentContainer}>
        <OptionElement
          title={"Depunere cerere"}
          content={content1}
          navigateTo="/2"
        />
        <OptionElement title={"Lista dosare"} content={content2} />
      </div>
    </div>
  );
}
