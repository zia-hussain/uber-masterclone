import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md"; // React Icons for email and lock icons
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Icons for password visibility toggle
import Logo from "../../public/Logo.svg"; // Logo asset
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", formData);
    // Add your form submission logic here

    setFormData({
      email: "",
      password: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* Header */}
      <header className="flex items-center py-4 px-4">
        <img src={Logo} alt="Uber Logo" className="w-24" />
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto flex flex-col items-center justify-center flex-grow px-6">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Captain Login
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Log in to manage your rides and get updates with{" "}
          <span className="font-bold text-gray-900">Uber Captain.</span>
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email Input */}
          <div className="w-full flex items-center bg-gray-100 rounded-xl p-4 mb-4 shadow-sm border border-gray-300 focus-within:border-blue-500">
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
          <div className="w-full flex items-center bg-gray-100 rounded-xl p-4 mb-6 shadow-sm border border-gray-300 focus-within:border-blue-500 relative">
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
            {/* Password Toggle */}
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
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-bold shadow-2xl hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Create Account Link */}
        <div className="mt-4 w-full text-center">
          <p className="text-gray-600">
            Don&apos;t have a captain account?{" "}
            <Link
              to={"/captain-signup"}
              className="font-medium text-blue-600 underline hover:text-blue-800 transition"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* User Login Link */}
        <div className="mt-12 w-full">
          <Link
            to={"/login"}
            className="block text-center bg-gray-800 text-white py-3 rounded-xl text-lg font-bold hover:bg-gray-900 transition shadow-lg"
          >
            Login as User
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8 px-6">
        <p>
          By logging in, you agree to our{" "}
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

export default CaptainLogin;
