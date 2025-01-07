import React from "react";
import { FaRupeeSign } from "react-icons/fa6";
import { MapPinHouse } from "lucide-react";
import { FaTruckPickup } from "react-icons/fa6";
import { RiArrowDownWideLine } from "react-icons/ri";

const ConfirmRide = ({ setIsRideConfirmed, setLookingForDriver }) => {
  return (
    <div className="w-full flex flex-col bg-white shadow-lg rounded-t-2xl">
      {/* Header with close button */}
      <div className="relative p-4 border-b">
        <button
          className="absolute left-1/2 transform -translate-x-1/2 top-0"
          onClick={() => setIsRideConfirmed(false)}
        >
          <RiArrowDownWideLine className="text-gray-400 text-4xl" />
        </button>
        <h1 className="text-2xl font-semibold text-start mt-6">
          Confirm Your Ride
        </h1>
      </div>

      {/* Ride Animation */}
      <div className="flex flex-col items-center py-4">
        <div className="relative w-48 h-48 ">
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
      </div>

      {/* Ride Details Section */}
      <div className="flex-1 flex flex-col px-6 space-y-4">
        {/* Pickup Location */}
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <MapPinHouse className="text-blue-500" />
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
            <FaTruckPickup size={24} className="text-green-500" />
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
        <div className="flex items-center justify-between py-4 border-t">
          <div className="flex items-center space-x-4">
            <FaRupeeSign className="w-5 h-5 text-black" />
            <span className="text-xl font-bold">193.20</span>
          </div>
          <div className="text-gray-600">Cash Payment</div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="p-4 border-t">
        <button
          onClick={() => {
            setIsRideConfirmed(false);
            setLookingForDriver(true);
          }}
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
