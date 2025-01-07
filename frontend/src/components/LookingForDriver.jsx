import { MapPinHouse } from "lucide-react";
import React, { useEffect } from "react";
import { FaRupeeSign, FaTruckPickup } from "react-icons/fa";
import { RiArrowDownWideLine } from "react-icons/ri";

const LookingForDriver = ({ setLookingForDriver }) => {
  return (
    <div className=" w-full flex flex-col bg-white">
      <div className="relative p-4 border-b">
        <button
          className="absolute left-1/2 transform -translate-x-1/2 top-0"
          onClick={() => setLookingForDriver(false)}
        >
          <RiArrowDownWideLine className="text-gray-400 text-4xl" />
        </button>
        <h1 className="text-2xl font-semibold text-start mt-6">
          Looking for nearby drivers
        </h1>
      </div>
      <div className="relative w-full h-1 bg-gray-200">
        <div
          className="absolute h-full bg-blue-500 animate-loading-bar"
          style={{ width: "30%" }} // Adjust width to customize the loading segment
        ></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start p-6 space-y-8">
        {/* Animated Car Section */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-blue-100/50 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-blue-100 rounded-full animate-pulse delay-75"></div>
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="Car"
            width={100}
            height={100}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Location Details */}
        <div className="w-full space-y-6">
          {/* Pickup Location */}
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <MapPinHouse />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">562/11-A</h2>
              <p className="text-gray-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <FaTruckPickup size={24} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Third Wave Coffee</h2>
              <p className="text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </p>
            </div>
          </div>

          {/* Price and Payment */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-4">
              <FaRupeeSign className="w-5 h-5" />
              <span className="text-xl font-bold">193.20</span>
            </div>
            <div className="text-gray-600">Cash Cash</div>
          </div>
        </div>
      </div>

      {/* Cancel Button */}
      <div
        onClick={() => {
          setLookingForDriver(false);
        }}
        className="p-4 border-t"
      >
        <button className="w-full py-3 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg shadow-sm hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-colors duration-200 ease-in-out">
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default LookingForDriver;
