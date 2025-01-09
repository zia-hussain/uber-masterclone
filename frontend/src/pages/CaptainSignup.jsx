import React, { useContext, useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import Logo from "../../public/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(false); // State for the loader
  const [formData, setFormData] = useState({
    fullname: { firstname: "", lastname: "" },
    email: "",
    password: "",
    vehicle: { color: "", plate: "", capacity: "", vehicleType: "" },
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      if (name === "firstname" || name === "lastname") {
        return {
          ...prevData,
          fullname: { ...prevData.fullname, [name]: value },
        };
      }

      if (["color", "plate", "capacity", "vehicleType"].includes(name)) {
        return {
          ...prevData,
          vehicle: { ...prevData.vehicle, [name]: value },
        };
      }

      return { ...prevData, [name]: value };
    });
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isFormValid = Object.entries(formData).every(([key, value]) => {
      if (typeof value === "object") {
        return Object.values(value).every((subValue) => subValue);
      }
      return value;
    });

    if (!isFormValid) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        formData
      );

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      setLoading(false);

      navigate("/captain-home");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <header className="flex items-center py-4 px-4">
        <img src={Logo} alt="Uber Logo" className="w-24" />
      </header>

      <main className="max-w-lg mx-auto flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Join as a Captain
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Sign up to start your journey with{" "}
          <span className="font-bold text-gray-900">Uber.</span>
        </p>

        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4 w-full">
            {[
              { name: "firstname", placeholder: "First Name" },
              { name: "lastname", placeholder: "Last Name" },
            ].map((field) => (
              <div
                key={field.name}
                className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black"
              >
                <MdPerson className="text-gray-500 w-6 h-6 mr-3" />
                <input
                  type="text"
                  name={field.name}
                  value={formData.fullname[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                  required
                />
              </div>
            ))}
          </div>

          <div className="w-full flex items-center bg-gray-100 rounded-xl p-4 mb-4 shadow-sm border border-gray-300 focus-within:border-black">
            <MdEmail className="text-gray-500 w-6 h-6 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
              required
            />
          </div>

          <div className="w-full flex items-center bg-gray-100 rounded-xl p-4 mb-4 shadow-sm border border-gray-300 focus-within:border-black relative">
            <MdLock className="text-gray-500 w-6 h-6 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              {showPassword ? (
                <AiFillEye className="w-6 h-6" />
              ) : (
                <AiFillEyeInvisible className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="flex space-x-4 mb-4 w-full">
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <FaCar className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                name="color"
                value={formData.vehicle.color}
                onChange={handleChange}
                placeholder="Vehicle Color"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <FaCar className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                name="plate"
                value={formData.vehicle.plate}
                onChange={handleChange}
                placeholder="Plate Number"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-6 w-full">
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <FaCar className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="number"
                name="capacity"
                value={formData.vehicle.capacity}
                onChange={handleChange}
                placeholder="Capacity"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <FaCar className="text-gray-500 w-6 h-6 mr-3" />
              <select
                name="vehicleType"
                value={formData.vehicle.vehicleType}
                onChange={handleChange}
                className="w-full flex-grow bg-transparent outline-none text-base text-gray-500 placeholder-gray-500"
                required
              >
                <option value="" disabled className="text-gray-500">
                  Select Vehicle Type
                </option>
                <option className="!text-gray-800" value="moto">
                  Moto
                </option>
                <option className="!text-gray-800" value="auto">
                  Auto
                </option>
                <option className="!text-gray-800" value="car">
                  Car
                </option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-bold shadow-2xl  transition flex items-center justify-center"
          >
            {loading ? (
              <span className="loader w-5 h-7 border-2 border-t-white border-blue-400 rounded-full animate-spin"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-black underline hover:text-gray-800 transition"
            >
              Log In
            </Link>
          </p>
        </div>

        {/* User Login Link */}
        <div className="mt-12 w-full">
          <Link
            to={"/signup"}
            className="block text-center bg-gray-800 text-white py-3 rounded-xl text-lg font-bold hover:bg-gray-900 transition shadow-lg"
          >
            Sign Up as User
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8 px-6">
        <p>
          By signing up, you agree to our{" "}
          <span className="font-medium text-gray-700 cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="font-medium text-gray-700 cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </footer>
    </div>
  );
};

export default CaptainSignup;
