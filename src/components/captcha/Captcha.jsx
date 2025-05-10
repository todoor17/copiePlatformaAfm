import style from "./captcha.module.css";
import { useEffect, useState } from "react";

export default function Captcha({ showCaptcha, setShowCaptcha, onSuccess }) {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");

  const generateCatcha = () => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
      letters.push(String.fromCharCode(i + 32));
    }

    let code = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 100) % 52;
      code += letters[index];
    }

    setCaptcha(code);
    console.log("Generated captcha:", code);
  };

  useEffect(() => {
    generateCatcha();
    console.log("Captcha component mounted");
  }, []);

  const validateCaptcha = () => {
    console.log("Validating captcha:", input, captcha);
    if (input === captcha) {
      console.log("Captcha validation successful");
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
      setShowCaptcha(false);
    } else {
      setInput("");
      alert("Codul introdus este gresit");
    }
  };

  const handleCancel = () => {
    console.log("Canceling captcha");
    setShowCaptcha(false);
  };

  return (
    <>
      <div className={style.captchaContainer}>
        <div className={style.title}>Sunteti sigur?</div>
        <div>Confirmati incarcarea cererii?</div>
        <div className={style.code}>{captcha}</div>
        <button
          className={style.button}
          onClick={generateCatcha}
          style={{ backgroundColor: "#03cd9a" }}
        >
          Regenerare cod
        </button>
        <div>Introduceti codul de mai sus</div>
        <input
          className={style.input}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        ></input>
        <button
          className={style.button}
          onClick={handleCancel}
          style={{ backgroundColor: "#ec5e55" }}
        >
          Renunta
        </button>
        <button
          className={style.button}
          style={{ backgroundColor: "#03cd9a" }}
          onClick={validateCaptcha}
        >
          Confirma
        </button>
      </div>
    </>
  );
}
