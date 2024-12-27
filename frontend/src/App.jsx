import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UnsupportedScreenModal from "./components/UnsupportedScreenModal";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <UserContext>
      <div>
        {/* Modal for non-mobile screens */}
        {!isMobile && <UnsupportedScreenModal />}

        {/* App Routes */}
        <div className={`${!isMobile ? "overflow-hidden h-screen" : ""}`}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/captain-login" element={<CaptainLogin />} />
            <Route path="/captain-signup" element={<CaptainSignup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </UserContext>
  );
};

export default App;
