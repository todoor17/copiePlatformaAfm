import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FirstPage from "./pages/firstPage/FirstPage.jsx";
import SecondPage from "./pages/secondPage/SecondPage.jsx";
import ThirdPage from "./pages/thirdPage/ThirdPage.jsx";
import { FileProvider } from "./context/FileContext.jsx";
import { TimerProvider } from "./context/TimerContext.jsx";
import Counter from "./components/counter/Counter.jsx";
import { useEffect } from "react";

export default function App() {
  // Get the base URL from the import.meta.env
  const basePath = import.meta.env.BASE_URL || "/copiePlatformaAfm/";

  // Effect to handle page reload
  useEffect(() => {
    // Check if current path is not one of our valid routes after considering the base path
    const currentPath = window.location.pathname;
    const validPaths = [
      `${basePath}`,
      `${basePath}1`,
      `${basePath}2`,
      `${basePath}3`,
    ];

    const isValidPath = validPaths.some(
      (path) => currentPath === path || currentPath === path + "/"
    );

    if (!isValidPath) {
      // Redirect to the first page
      window.history.replaceState(null, document.title, `${basePath}1`);
    }
  }, [basePath]);

  return (
    <FileProvider>
      <TimerProvider>
        <Router basename={basePath}>
          {/* Counter component that persists across all pages */}
          <Counter />

          <Routes>
            {/* Explicit route for the root path */}
            <Route path="/" element={<Navigate to="/1" replace />} />
            <Route path="/1" element={<FirstPage />} />
            <Route path="/2" element={<SecondPage />} />
            <Route path="/3" element={<ThirdPage />} />
            <Route path="*" element={<Navigate to="/1" replace />} />
          </Routes>
        </Router>
      </TimerProvider>
    </FileProvider>
  );
}
