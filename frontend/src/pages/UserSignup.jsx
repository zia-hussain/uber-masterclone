import { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../public/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const [formData, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstname" || name === "lastname") {
      setFormData((prevData) => ({
        ...prevData,
        fullname: {
          ...prevData.fullname,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    const newUser = { ...formData };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;

      setUser(data.user);
      navigate("/home");
    }
  };

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
      <main className=" max-w-lg mx-auto flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
          Create Your Account
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Sign up to start your journey with{" "}
          <span className="font-bold text-gray-900">Uber.</span>
        </p>
        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="flex space-x-4 mb-4 w-full">
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <MdPerson className="text-gray-500 w-8 h-8 mr-3" />
              <input
                type="text"
                name="firstname"
                value={formData.fullname.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full flex-grow bg-transparent outline-none text-gray-800 text-base placeholder-gray-500"
                required
              />
            </div>
            <div className="w-full flex items-center bg-gray-100 rounded-xl py-4 px-2 shadow-sm border border-gray-300 focus-within:border-black">
              <MdPerson className="text-gray-500 w-8 h-8 mr-3" />
              <input
                type="text"
                name="lastname"
                value={formData.fullname.lastname}
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
            to={"/captain-signup"}
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
