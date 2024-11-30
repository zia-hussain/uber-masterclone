import React from "react";
import { MdEmail, MdLock } from "react-icons/md"; // React Icons for email and lock icons
import Logo from "../../public/Logo.svg"; // Logo asset
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex items-center py-4 px-4">
        <img src={Logo} alt="Uber Logo" className="w-24" />
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Log in to Continue
        </h1>

        {/* Email Input */}
        <div className="w-full flex items-center bg-gray-200 rounded-lg p-4 mb-4 shadow-sm">
          <MdEmail className="text-gray-500 w-6 h-6 mr-3" />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-transparent outline-none text-gray-700 text-lg"
          />
        </div>

        {/* Password Input */}
        <div className="w-full flex items-center bg-gray-200 rounded-lg p-4 mb-6 shadow-sm">
          <MdLock className="text-gray-500 w-6 h-6 mr-3" />
          <input
            type="password"
            placeholder="Enter your password"
            className="flex-grow bg-transparent outline-none text-gray-700 text-lg"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition shadow-lg">
          Login
        </button>

        {/* Create Account Link */}
        <div className="mt-6 w-full">
          <p className="text-gray-600">
            New Here?{" "}
            <Link
              to={"/signup"}
              className="text-black font-medium cursor-pointer underline hover:text-gray-800 transition"
              onClick={() => console.log("Navigate to Signup Page")}
            >
              Create a new one
            </Link>
          </p>
        </div>

        <div className="mt-2 text-start w-full">
          <Link
            to={"/captain-login"}
            className="w-full block text-center bg-[#10b461] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#2e9662] transition shadow-lg mt-1"
          >
            Sign in as Captain
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-6 px-6">
        <p>
          By continuing, you agree to Uber's{" "}
          <span className="text-black font-medium cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-black font-medium cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </footer>
    </div>
  );
};

export default UserLogin;
