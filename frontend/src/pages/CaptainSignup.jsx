import React, { useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import Logo from "../../public/Logo.svg";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vehicleColor: "",
    plateNumber: "",
    capacity: "",
    vehicleType: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    console.log("Captain Signup Data:", formData);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center py-4 px-4">
        <img src={Logo} alt="Uber Logo" className="w-24" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Join as a Captain
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Sign up to start your journey with{" "}
          <span className="font-bold text-gray-900">Uber.</span>
        </p>

        {/* Form */}
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="flex space-x-4 mb-4 w-full">
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <MdPerson className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <MdPerson className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Vehicle Details */}
          <div className="flex space-x-4 mb-4 w-full">
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <FaCar className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                name="vehicleColor"
                value={formData.vehicleColor}
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
                name="plateNumber"
                value={formData.plateNumber}
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
                type="text"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Capacity"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <FaCar className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                placeholder="Vehicle Type"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-bold shadow-2xl transition"
          >
            Sign Up as Captain
          </button>
        </form>

        {/* Already have an account Link */}
        <div className="mt-4 w-full text-center">
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
