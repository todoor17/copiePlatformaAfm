import { createContext, useState, useContext } from "react";

// Create a context for sharing file data
const FileContext = createContext();

// Custom hook to use the file context
export const useFileContext = () => useContext(FileContext);

// Provider component for the file context
export const FileProvider = ({ children }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  // Function to update the uploaded file
  const updateUploadedFile = (file) => {
    setUploadedFile(file);
  };

  return (
    <FileContext.Provider value={{ uploadedFile, updateUploadedFile }}>
      {children}
    </FileContext.Provider>
  );
};
