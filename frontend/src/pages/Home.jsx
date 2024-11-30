import React from "react";
import Logo from "../../public/Logo.svg";
import Background from "../assets/homeBackground.jpg";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="h-screen pt-2 w-full bg-gray-300  flex justify-between flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img className="w-24 ml-4" src={Logo} alt="" />
        <div className="bg-white pb-5 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="w-full bg-black text-white font-bold  py-3 rounded mt-6 flex items-center justify-center relative hover:bg-gray-800 transition"
          >
            <span>Continue</span>
            <span className="absolute right-4">
              <HiChevronRight className="text-white w-7 h-7" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
