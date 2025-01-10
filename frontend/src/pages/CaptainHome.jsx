import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import Logo from "../../public/Logo.svg";
import Map from "../assets/map.gif";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [isRidePopUp, setIsRidePopUp] = useState(true);
  const [confirmIsRidePopUp, setConfirmIsRidePopUp] = useState(false);
  console.log(confirmIsRidePopUp, "ConfirmIsRidePopUp");

  const ridePopUpRef = useRef(null);
  const confirmRidePopUpRef = useRef(null);

  useEffect(() => {
    if (isRidePopUp) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [isRidePopUp]);

  useEffect(() => {
    if (confirmIsRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmIsRidePopUp]);

  return (
    <div className="h-screen ">
      <header className="flex justify-between items-center px-6 bg-white  relative z-10">
        <Link to="/captain-home">
          <img src={Logo} alt="Uber Logo" className="w-28" />
        </Link>
        <button className="flex items-center justify-center p-2 bg-gray-400 text-white rounded-full">
          <CiLogout size={24} className=" rounded-full" />
        </button>
      </header>
      <div className="h-1/2">
        <img src={Map} alt="Map" className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full bg-white shadow-lg rounded-t-2xl h-1/2">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopUpRef}
        className={`fixed bottom-0 left-0 translate-y-full z-20 w-full bg-white shadow-lg rounded-t-2xl`}
      >
        <RidePopUp
          setConfirmIsRidePopUp={setConfirmIsRidePopUp}
          setIsRidePopUp={setIsRidePopUp}
        />
      </div>

      <div
        ref={confirmRidePopUpRef}
        className={`fixed bottom-0 h-full left-0 translate-y-full z-20 w-full bg-white shadow-lg rounded-t-2xl`}
      >
        <ConfirmRidePopUp setConfirmIsRidePopUp={setConfirmIsRidePopUp} />
      </div>
    </div>
  );
};

export default CaptainHome;
