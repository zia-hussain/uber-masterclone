import React from "react";
import { FaUser } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";

const VehiclePanel = ({
  handleSelectRide,
  selectedRide,
  setIsLocationDone,
}) => {
  const rideOptions = [
    {
      name: "UberGo",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png",
      eta: "4 min",
      capacity: "4",
      price: "Rs.350",
      wmib: "Affordable, compact rides",
    },
    {
      name: "Moto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s",
      eta: "5 min",
      capacity: "1",
      wmib: "Affordable, motorcycle rides",
      price: "Rs.170",
    },
    {
      name: "UberAuto",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
      eta: "5 min",
      capacity: "3",
      price: "Rs.230",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Drag Handle */}
      <h5
        className="p-1 text-center left-1/2 transform -translate-x-1/2  absolute top-0"
        onClick={() => {
          setIsLocationDone(false);
        }}
      >
        <RiArrowDownWideLine className="text-gray-300 text-4xl" />
      </h5>

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 my-6 ">Choose a Ride</h2>

      {/* Ride Options */}
      <div className="space-y-4">
        {rideOptions.map((option) => (
          <div
            key={option.name}
            className={`flex items-center justify-between p-4 bg-white rounded-lg transition-all border-2 cursor-pointer ${
              selectedRide === option.name ? "border-black" : "border-gray-200"
            } hover:shadow-md hover:border-gray-400`}
            onClick={() => handleSelectRide(option.name)}
          >
            {/* Left Section: Icon and Details */}
            <div className="flex items-center space-x-4">
              <img
                src={option.image}
                alt={option.name}
                className="h-10 w-10 object-cover"
              />
              <div>
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-gray-800">{option.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="text-center">{option.capacity}</span>
                    <FaUser size={14} className="text-gray-500" />
                  </div>
                </div>
                <p className="text-sm text-gray-900">{option.eta} away</p>
                <p className="text-sm text-gray-600">{option.wmib}</p>
              </div>
            </div>

            {/* Right Section: Price */}
            <div className="flex items-center mb-auto space-x-2">
              <span className="font-semibold text-gray-800">
                {option.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclePanel;
