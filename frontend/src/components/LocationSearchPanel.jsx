import React from "react";
import { FaMapMarkerAlt, FaStar, FaTrain } from "react-icons/fa";

const LocationSearchPanel = ({ setIsLocationDone, setIsExpanded }) => {
  // Sample dummy data
  const locations = [
    {
      name: "Karachi Cantt Station",
      type: "train_station",
      address: "Dr. Daud Pota Road, Karachi",
    },
    {
      name: "Clifton Beach",
      type: "tourist_attraction",
      address: "Clifton, Karachi",
    },
    {
      name: "Burns Road Food Street",
      type: "restaurant",
      address: "Burns Road, Karachi",
    },
    {
      name: "Mazar-e-Quaid",
      type: "landmark",
      address: "M.A. Jinnah Road, Karachi",
    },
    {
      name: "Dolmen Mall Clifton",
      type: "shopping_mall",
      address: "Marine Drive, Karachi",
    },
  ];

  const getLocationIcon = (type) => {
    switch (type) {
      case "train_station":
        return <FaTrain className="text-blue-500" />;
      case "restaurant":
        return <FaStar className="text-yellow-500" />;
      case "shopping_mall":
      case "tourist_attraction":
      case "landmark":
        return <FaMapMarkerAlt className="text-gray-500" />;
      default:
        return <FaMapMarkerAlt className="text-gray-500" />;
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-2 ">
        {locations.map((location, index) => (
          <button
            onClick={() => {
              setIsExpanded(false);
              setIsLocationDone(true);
            }}
            key={index}
            className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all"
          >
            <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md">
              {getLocationIcon(location.type)}
            </div>
            <div className="ml-4 text-left">
              <h5 className="text-gray-800 font-medium">{location.name}</h5>
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default LocationSearchPanel;
