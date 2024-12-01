import React, { useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md"; // React Icons
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Icons for toggle visibility
import Logo from "../../public/Logo.svg";
import { Link } from "react-router-dom";

const UserSignup = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center py-4 px-4">
        <img src={Logo} alt="Uber Logo" className="w-24" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-6">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Create Your Account
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Sign up to start your journey with{" "}
          <span className="font-bold text-gray-900">Uber.</span>
        </p>
        {/* Form */}
        <form className="w-full max-w-md">
          {/* Full Name Input */}
          <div className="w-full flex items-center bg-gray-100 rounded-xl p-4 mb-4 shadow-sm border border-gray-300 focus-within:border-black">
            <MdPerson className="text-gray-500 w-6 h-6 mr-3" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
              required
            />
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
          <div className="w-full flex items-center bg-gray-100 rounded-xl p-4 mb-6 shadow-sm border border-gray-300 focus-within:border-black relative">
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
            {/* Toggle Icon */}
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
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-bold shadow-2xl transition"
          >
            Sign Up
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

        {/* Sign in as Captain */}
        <div className="mt-12 w-full">
          <Link
            to={"/captain-login"}
            className="block text-center bg-green-500 text-white py-3 rounded-xl text-lg font-bold hover:bg-green-600 transition shadow-lg"
          >
            Sign up as Captain
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

export default UserSignup;
