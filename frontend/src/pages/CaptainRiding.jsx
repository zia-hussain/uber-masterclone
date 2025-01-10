import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../public/Logo.svg";

const CaptainRiding = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      <header className="flex justify-between items-center px-6 bg-white  relative z-10">
        <Link to="/captain-home">
          <img src={Logo} alt="Uber Logo" className="w-28" />
        </Link>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="flex items-center justify-center p-2 bg-gray-400 text-white rounded-full"
        >
          <IoIosArrowBack size={24} className=" rounded-full" />
        </button>
      </header>

      {/* Map Section */}
      <div className="flex-1 relative ">
        <div className="mapouter h-full">
          <div className="gmap_canvas h-full ">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=karachi&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Popup */}
      <div className="bg-white w-full rounded-t-2xl shadow-lg p-4 fixed bottom-0 left-0 flex flex-col items-center gap-4">
        <div className="flex items-center justify-between w-full">
          {/* Rider Info */}
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s"
              alt="Rider"
              className="h-14 w-14 rounded-full object-cover shadow-sm border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Zia Shah</h3>
              <p className="text-sm text-gray-500">5.1 KM to destination</p>
            </div>
          </div>

          {/* ETA */}
          <div className="flex flex-col items-end">
            <p className="text-lg font-bold text-gray-800">ETA: 12 mins</p>
            <FaLocationArrow className="text-gray-500 text-xl" />
          </div>
        </div>

        {/* Drop-off Details */}
        <div className="w-full bg-gray-100 p-4 rounded-lg">
          <h4 className="text-gray-500 text-sm font-medium">Drop Off</h4>
          <p className="text-gray-800 text-lg font-semibold">
            Third Wave Coffee
          </p>
          <p className="text-gray-500 text-sm">
            17th Cross Rd, PWD Quarters, HSR Layout, Bengaluru, Karnataka
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex gap-4">
          <button className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition">
            Cancel Ride
          </button>
          <Link
            to="/drop-off"
            className="w-full py-3 text-center bg-[#FFD60A] text-black font-semibold rounded-lg hover:bg-opacity-90 transition"
          >
            Drop Off
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
