import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UnsupportedScreenModal from "./components/UnsupportedScreenModal";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import Riding from "./pages/Riding";
import "remixicon/fonts/remixicon.css";

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
        {isMobile && <UnsupportedScreenModal />}

        {/* App Routes */}
        <div className={`${!isMobile ? "overflow-hidden h-screen" : ""}`}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/captain-login" element={<CaptainLogin />} />
            <Route path="/captain-signup" element={<CaptainSignup />} />
            <Route
              path="/home"
              element={
                <UserProtectedWrapper>
                  <Home />
                </UserProtectedWrapper>
              }
            />
            <Route path="/riding" element={<Riding />} />

            <Route
              path="/user/logout"
              element={
                <UserProtectedWrapper>
                  <UserLogout />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/captain-home"
              element={
                <CaptainProtectWrapper>
                  <CaptainHome />
                </CaptainProtectWrapper>
              }
            />
          </Routes>
        </div>
      </div>
    </UserContext>
  );
};

export default App;
