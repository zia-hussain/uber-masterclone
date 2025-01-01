import Logo from "../../public/Logo.svg";
import { FaUserCircle } from "react-icons/fa";
import Map from "../assets/map.gif";

const Home = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-4 relative z-10">
        <img src={Logo} alt="Uber Logo" className="w-24" />
        <button className="flex items-center justify-center p-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 transition-all">
          <FaUserCircle size={24} />
        </button>
      </header>

      <div className="absolute inset-0 h-screen w-screen z-0">
        <img className="h-full w-full object-cover" src={Map} alt="" />
      </div>

      <div></div>
    </div>
  );
};

export default Home;
