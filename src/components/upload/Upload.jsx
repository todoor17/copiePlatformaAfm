import { useState, useEffect } from "react";
import style from "./upload.module.css";

export default function Upload({ title, description, initialFile = null }) {
  const [file, setFile] = useState(initialFile);

  // Update file if initialFile changes (for example when navigating between pages)
  useEffect(() => {
    if (initialFile) {
      setFile(initialFile);
    }
  }, [initialFile]);

  const handleChange = (e) => {
    const f = e.target.files[0];
    if (f) setFile(f);
  };

  return (
    <div className={`${style.container} ${file ? style.success : style.error}`}>
      <div className={style.info}>
        <div className={style.statusIcon}>
          {file ? (
            /* Green check icon */
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#27AE60" />
              <path
                d="M16 9L10.5 14.5L8 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            /* Red X icon */
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#E74C3C" />
              <path
                d="M15 9L9 15M9 9L15 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
        <div>
          <div className={style.title}>{file ? file.name : title}</div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
      <label className={file ? style.uploadedButton : style.uploadButton}>
        <input type="file" accept="application/pdf" onChange={handleChange} />
        {file ? (
          /* small white check for "Înregistrat" */
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Înregistrat
          </>
        ) : (
          /* upload icon + Încarcă PDF */
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16V4M12 4L8 8M12 4L16 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 20H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Încarcă PDF
          </>
        )}
      </label>
    </div>
  );
}
