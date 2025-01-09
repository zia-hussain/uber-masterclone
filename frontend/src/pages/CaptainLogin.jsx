import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../public/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State for the loader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start the loader

    try {
      const captain = {
        email: formData.email,
        password: formData.password,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captain
      );
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false); // Stop the loader
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <header className="flex items-center py-4 px-4">
        <img src={Logo} alt="Uber Logo" className="w-24" />
      </header>

      <main className="max-w-lg mx-auto flex flex-col items-center justify-center flex-grow px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Captain Login
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Log in to manage your rides and get updates with{" "}
          <span className="font-bold text-gray-900">Uber Captain.</span>
        </p>
        <form onSubmit={handleSubmit} className="w-full">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-bold shadow-2xl hover:bg-blue-700 transition flex items-center justify-center"
          >
            {loading ? (
              <span className="loader w-5 h-7 border-2 border-t-white border-blue-400 rounded-full animate-spin"></span>
            ) : (
              "Log In"
            )}
          </button>
        </form>

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
        <div className="mt-12 w-full">
          <Link
            to={"/login"}
            className="block text-center bg-gray-800 text-white py-3 rounded-xl text-lg font-bold hover:bg-gray-900 transition shadow-lg"
          >
            Sign in as User
          </Link>
        </div>
      </main>
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
