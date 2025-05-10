import style from "./secondPage.module.css";
import Header from "../../components/header/Header.jsx";
import InfoBox from "../../components/infoBox/InfoBox.jsx";
import Button from "../../components/button/Button.jsx";
import buttonStyle from "../../components/button/button.module.css";
import Captcha from "../../components/captcha/Captcha.jsx";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFileContext } from "../../context/FileContext.jsx";

export default function SecondPage() {
  const navigate = useNavigate();
  const { updateUploadedFile } = useFileContext();
  const [option, setOption] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const fileInputRef = useRef(null);

  // Function to handle successful captcha verification
  const handleCaptchaSuccess = () => {
    console.log("Captcha verified successfully");
    // Trigger file upload dialog
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle upload button click
  const handleUploadClick = () => {
    console.log("Upload button clicked, showing captcha");
    setShowCaptcha(true);
  };

  // Function to handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file.name);

      // Store the file in context for use in ThirdPage
      updateUploadedFile(file);

      // Navigate to ThirdPage after file upload
      setTimeout(() => {
        navigate("/3");
      }, 500); // Add a small delay to show the file was selected
    }
  };

  useEffect(() => {
    console.log(option);
  }, [option]);

  return (
    <div className={style.container}>
      <div
        className={`${style.pageContent} ${showCaptcha ? style.blurred : ""}`}
      >
        <div className={style.headerContainer}>
          <Header />
        </div>
        <div className={style.titleContainer}>Depunere cerere noua</div>
        <div className={style.contentContainer}>
          <div className={style.boxContainer}>
            <div className={style.message}>
              Selectati programul de finantare aferent pentru care doriti
              depunerea cererii
            </div>
            <div className={style.inputContainer}>
              <select
                id="city"
                name="city"
                className={style.select}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="">
                  -- Selectati o sesiune aferenta programului de finantare --
                </option>
                <option value="first">
                  Sesiune depunere dosare de catre UAT-uri pentru inscrierea in
                  Programul privind achizitionarea aparatelor pentru incalzirea
                  locuintelor
                </option>
                <option value="second">
                  Sesiune depunere dosare de cerere de finantare tractoare si
                  masini agricole autopropulsate
                </option>
                <option value="third">
                  Sesiune depunere dosare de finantare Rabla Auto Privati
                </option>
                <option value="fourh">
                  Sesiune depunere dosare de finantare Rabla Auto Publici
                </option>
                <option value="fifth">
                  Sesiune depunere dosare de finantare reducerea emisiilor de
                  gaze cu efect de sera in transporturi
                </option>
                <option value="sixth">
                  Sesiune depunere dosare de validare a instalatorului de
                  sisteme de panouri fotovoltaice
                </option>
                <option value="seventh">
                  Sesiune depunere dosare de validare a producatorului auto
                </option>
                <option value="eigth">
                  Sesiune pentru inscrierea persoanelor fizice in Programul
                  privind achizitionarea aparatelor pentru incalzirea
                  locuintelor
                </option>
              </select>
              {option === "second" && (
                <>
                  <div className={style.infoBoxContainer}>
                    <InfoBox
                      title={"Disponibil ramas"}
                      content={"9 526 507"}
                      color={"#6b747b"}
                    />
                    <InfoBox
                      title={"Data si ora lansare"}
                      content={"01/03/2025 10:00"}
                      color={"#343940"}
                    />
                    <InfoBox
                      title={"Data si ora inchidere"}
                      content={"01/05/2025 23:59"}
                      color={"#6b747b"}
                    />
                    <InfoBox
                      title={"Etapa curenta de depunere"}
                      content={"Toate punctajele"}
                      color={"#343940"}
                    />
                  </div>
                  <div className={style.buttonContainer}>
                    <Button
                      text={"Descarca model cerere de finantare"}
                      bgColor={"#017cfd"}
                      type={"download"}
                    />
                    <button
                      className={buttonStyle.button}
                      style={{ backgroundColor: "#25a743" }}
                      onClick={handleUploadClick}
                    >
                      Incarca cererea completata
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Captcha Component */}
      {showCaptcha && (
        <div className={style.captchaWrapper}>
          <Captcha
            showCaptcha={showCaptcha}
            setShowCaptcha={setShowCaptcha}
            onSuccess={handleCaptchaSuccess}
          />
        </div>
      )}
    </div>
  );
}
