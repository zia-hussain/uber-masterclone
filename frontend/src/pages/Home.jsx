import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";
import gsap from "gsap";
import Logo from "../../public/Logo.svg";
import Map from "../assets/map.gif";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";

const Home = () => {
  // State management
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocationDone, setIsLocationDone] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);

  // Refs for animations
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  // Handlers
  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);
  const handleProfileRedirect = () => console.log("Redirecting to profile...");
  const handleSelectRide = (optionName) => setSelectedRide(optionName);

  // Animation for vehicle panel
  useEffect(() => {
    const animationSettings = {
      y: isLocationDone ? "0%" : "100%",
      height: isLocationDone ? "28rem" : "0rem",
      duration: 0.6,
      ease: isLocationDone ? "power3.out" : "power3.in",
    };
    gsap.to(vehiclePanelRef.current, animationSettings);
  }, [isLocationDone]);

  useEffect(() => {
    const panelSettings = {
      height: isExpanded ? "70%" : "0%",
      padding: isExpanded ? 24 : 0,
    };
    const closeButtonSettings = { opacity: isExpanded ? 1 : 0 };

    gsap.to(panelRef.current, panelSettings);
    gsap.to(panelCloseRef.current, closeButtonSettings);
  }, [isExpanded]);

  return (
    <div className="h-screen relative">
      {/* Header */}
      <header className="flex justify-between items-center px-6 bg-white shadow-md relative z-10">
        <Link to="/home">
          <img src={Logo} alt="Uber Logo" className="w-28" />
        </Link>
        <button
          onClick={handleProfileRedirect}
          className="flex items-center justify-center p-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-400"
        >
          <FaUserCircle size={30} />
        </button>
      </header>

      {/* Background Map */}
      <div className="absolute inset-0 h-screen w-screen z-0">
        <img src={Map} alt="Map" className="h-full w-full object-cover" />
      </div>

      {/* Trip Finder */}
      <div
        className={`absolute left-0 top-0 z-20 h-screen w-full transition-all duration-700 ${
          isExpanded ? "bg-white" : ""
        }`}
      >
        <div
          className={`flex flex-col justify-end h-full relative overflow-hidden`}
        >
          <div
            className={`bg-white p-6 rounded-t-2xl relative ${
              isExpanded ? "h-[30%]" : ""
            }`}
          >
            <div
              className={`absolute top-3 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-300 rounded-full mb-4 transition-all duration-300 ${
                isExpanded ? "hidden" : ""
              }`}
            ></div>

            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-semibold text-black">
                {isExpanded ? "Enter Trip Details" : "Find a Trip"}
              </h4>
              <button
                ref={panelCloseRef}
                onClick={handleCollapse}
                className={`text-gray-400 p-2 rounded-full transition-opacity duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0"
                }`}
              >
                <RiArrowDownWideLine size={24} />
              </button>
            </div>

            <form className="py-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-blue-500 text-white p-3 rounded-full shadow-md">
                  <FaMapMarkerAlt size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Add a pick-up location"
                  className="flex-grow p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  onFocus={handleExpand}
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-red-500 text-white p-3 rounded-full shadow-md">
                  <FaLocationArrow size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="flex-grow p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  onFocus={handleExpand}
                />
              </div>
            </form>
          </div>

          {/* Suggestions */}
          <div
            ref={panelRef}
            className={`bg-white px-6 space-y-4 ${isExpanded ? "h-[70%]" : ""}`}
          >
            <h5 className="text-lg font-medium text-gray-600">Suggestions</h5>
            <LocationSearchPanel
              setIsExpanded={setIsExpanded}
              setIsLocationDone={setIsLocationDone}
            />
          </div>
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className={`absolute bottom-0 left-0 z-20 w-full bg-white shadow-lg rounded-t-2xl ${
          isLocationDone ? "block" : "hidden"
        }`}
      >
        <VehiclePanel
          selectedRide={selectedRide}
          handleSelectRide={handleSelectRide}
        />
      </div>
    </div>
  );
};

export default Home;
