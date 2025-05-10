import style from "./ThirdPage.module.css";
import Header from "../../components/header/Header.jsx";
import Upload from "../../components/upload/Upload.jsx";
import Captcha from "../../components/captcha/Captcha.jsx";
import { useState, useRef, useEffect } from "react";
import { useFileContext } from "../../context/FileContext.jsx";
import { useTimerContext } from "../../context/TimerContext.jsx";

export default function ThirdPage() {
  const [ok, setOk] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { uploadedFile } = useFileContext();
  const { timeString, stopTimer } = useTimerContext();

  // Function to handle successful captcha verification
  const handleCaptchaSuccess = () => {
    // Stop the timer when captcha is verified successfully
    stopTimer();

    // Show success message with the time
    alert(`Felicitari, ai parcurs toti pasii in ${timeString}`);
  };

  // Function to handle confirm button click
  const handleConfirmClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowCaptcha(true);
  };

  useEffect(() => {
    // Log the uploaded file when component mounts
    if (uploadedFile) {
      console.log("Received file from Page 2:", uploadedFile.name);
    }
  }, [uploadedFile]);

  return (
    <>
      <div className={style.container}>
        <div
          className={`${style.pageContent} ${showCaptcha ? style.blurred : ""}`}
        >
          <div className={style.headerContainer}>
            <Header />
          </div>
          <div className={style.titleContainer}>Vizualizare dosar</div>
          <div className={style.contentContainer}>
            <div className={style.boxContainer}>
              <div className={style.message}>
                Dosar de înscriere cerere de finanțare tractoare și mașini
                agricole autopropulsate
              </div>
              <div className={style.inputContainer}>
                <div className={style.data}>
                  AICI VOR FI DATELE PERSOANEI PENTRU CARE ÎNCĂRCAȚI
                </div>
                <div className={style.message1}>
                  Documente dosar (fișier și descriere)
                </div>
                <Upload
                  title="Fără fișier încărcat"
                  description="Cererea de finanțare completată integral."
                  initialFile={uploadedFile}
                />
                <Upload
                  title="Fără fișier încărcat"
                  description="Act de identitate al solicitantului, valabil la momentul înscrierii în aplicație."
                />
                <Upload
                  title="Fără fișier încărcat"
                  description="Certificat de atestare fiscală privind obligațiile de plată către bugetul de stat."
                />
                <Upload
                  title="Fără fișier încărcat"
                  description="Certificat fiscal emis de autoritatea locală privind obligațiile către bugetul local."
                />
                <Upload
                  title="Fără fișier încărcat"
                  description="Atestatul de producător emis pe numele solicitantului, valabil."
                />
                <div className={style.checkboxContainer}>
                  <label className={style.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={ok}
                      onChange={(e) => setOk(e.target.checked)}
                    />
                    Declar că am luat la cunoștință prevederile ghidului de
                    finanțare
                  </label>

                  {ok && (
                    <button
                      className={style.confirmButton}
                      onClick={handleConfirmClick}
                    >
                      Confirmă depunerea
                    </button>
                  )}
                </div>
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
    </>
  );
}
