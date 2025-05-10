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
  // Effect to handle page reload
  useEffect(() => {
    // Check if current path is not one of our valid routes
    const currentPath = window.location.pathname;
    if (!["/1", "/2", "/3"].includes(currentPath)) {
      // Redirect to /1 on reload
      window.history.replaceState(null, document.title, "/1");
    }
  }, []);

  return (
    <FileProvider>
      <TimerProvider>
        <Router>
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
