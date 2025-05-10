import style from "./header.module.css";
import logo from "../../assets/images/AFM_logo.png";
import accountPic from "../../assets/images/account_logo.png";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.left}>
        <img src={logo} className={style.logo}></img>
        <div className={style.textContainer}>
          <div className={style.text}>ADMINISTRATIA</div>
          <div className={style.text}>FONDULUI</div>
          <div className={style.text}>PENTRU MEDIU</div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.text1}>Lista sesiuni</div>
        <div className={style.text1}>Instructiuni</div>
        <div className={style.text1}>Suport online</div>
        <div className={style.accountContainer}>
          <img src={accountPic} className={style.accountPic}></img>
          <div className={style.text1}>Ionut Popescu</div>
          <button className={style.button}>Deconectare</button>
        </div>
      </div>
    </div>
  );
}
