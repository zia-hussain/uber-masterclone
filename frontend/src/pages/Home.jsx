import Logo from "../../public/Logo.svg";
import {
  FaUserCircle,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaChevronRight,
  FaUser,
} from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";
import Map from "../assets/map.gif";
import { useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { Link } from "react-router-dom";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocationDone, setIsLocationDone] = useState(false);
  console.log(isExpanded, isLocationDone);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleProfileRedirect = () => {
    // Add navigation logic to the profile page
    console.log("Redirecting to profile...");
  };

  const rideOptions = [
    {
      name: "UberGo",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png",
      eta: "4 min",
      capacity: "4",
      price: "$13.50",
    },
    {
      name: "Moto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s",
      eta: "5 min",
      capacity: "1",

      price: "$17.75",
    },
    {
      name: "UberAuto",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
      eta: "5 min",
      capacity: "3",

      price: "$23.00",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 relative z-10 bg-white shadow-md">
        <Link to={"/home"}>
          <img src={Logo} alt="Uber Logo" className="w-28" />
        </Link>
        <button
          onClick={handleProfileRedirect}
          className="flex items-center justify-center p-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 transition-all"
        >
          <FaUserCircle size={30} />
        </button>
      </header>

      {/* Background Map */}
      <div className="absolute inset-0 h-screen w-screen z-0">
        <img className="h-full w-full object-cover" src={Map} alt="Map" />
      </div>

      {/* Trip Finder */}
      <div
        className={`absolute ${isLocationDone ? "hidden" : ""} ${
          isExpanded ? "top-0 h-screen" : "bottom-0 h-auto"
        } left-0 z-20 w-full bg-white shadow-lg rounded-t-2xl transition-all duration-300`}
      >
        <div className={`p-6 flex flex-col gap-4 relative`}>
          <div
            className={`${
              isExpanded ? "hidden" : ""
            } w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4`}
          ></div>

          {/* Heading */}
          <h4 className="text-2xl font-semibold text-black">
            {isExpanded ? "Enter Trip Details" : "Find a Trip"}
          </h4>

          <form className="relative py-6 rounded-lg space-y-6 transition-all duration-500">
            <div className="relative z-10 flex items-center space-x-4">
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

            <div className="relative z-10 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-red-500 text-white p-3 rounded-full shadow-md">
                <FaLocationArrow size={16} />
              </div>
              <input
                onFocus={handleExpand}
                type="text"
                placeholder="Where are you going?"
                className="flex-grow p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
          </form>

          {/* Suggestions */}
          {isExpanded && (
            <div className="mt-6 space-y-4">
              <h5 className="text-lg font-medium text-gray-600">Suggestions</h5>
              <LocationSearchPanel
                setIsExpanded={setIsExpanded}
                setIsLocationDone={setIsLocationDone}
              />
            </div>
          )}
          {isExpanded && (
            <button
              type="submit"
              className="w-full mt-6 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-all"
            >
              Find a Trip
            </button>
          )}

          {/* Collapse Arrow */}
          {isExpanded && (
            <button
              onClick={handleCollapse}
              className="absolute top-4 right-6 text-gray-600 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 transition-all"
            >
              <RiArrowDownWideLine size={24} />
            </button>
          )}
        </div>
      </div>

      <div
        className={`absolute ${
          isLocationDone ? "bottom-0 h-96" : "hidden"
        } left-0 z-20 w-full bg-white shadow-lg rounded-t-2xl transition-all duration-300`}
      >
        <div className="p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-4">Choose a ride</h2>
          <div className="space-y-4">
            {rideOptions.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="rounded-full h-10"
                  />
                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">{option.name} </h3>
                      <h4 className="flex items-center gap-1">
                        {option.capacity}
                        <span>
                          <FaUser size={12} />
                        </span>
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500">{option.eta} away</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{option.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
