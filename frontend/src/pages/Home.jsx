import Logo from "../../public/Logo.svg";
import { FaUserCircle, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";
import Map from "../assets/map.gif";
import { useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 relative z-10 bg-white shadow-md">
        <img src={Logo} alt="Uber Logo" className="w-28" />
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
        className={`absolute ${
          isExpanded ? "top-0 h-screen" : "bottom-0 h-auto"
        } left-0 z-20 w-full bg-white shadow-lg rounded-t-2xl transition-all duration-300`}
      >
        <div className={`p-6 flex flex-col gap-4 relative`}>
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
              <LocationSearchPanel />
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
    </div>
  );
};

export default Home;
