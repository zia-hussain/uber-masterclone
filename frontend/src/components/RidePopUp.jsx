import { FaRupeeSign } from "react-icons/fa6";
import { RiArrowDownWideLine } from "react-icons/ri";

const RidePopUp = ({ setIsRidePopUp, setConfirmIsRidePopUp }) => {
  return (
    <div>
      <div className="w-full flex flex-col gap-4 bg-white shadow-lg rounded-t-2xl">
        {/* Header with close button */}
        <div className="relative p-4 border-b">
          <button
            onClick={() => {
              setIsRidePopUp(false);
            }}
            className="absolute left-1/2 transform -translate-x-1/2 top-1"
          >
            <RiArrowDownWideLine className="text-gray-400 text-4xl" />
          </button>
          <h1 className="text-2xl font-semibold text-start mt-6">
            New Ride Availble!
          </h1>
        </div>

        <div className="min-h-24 w-[95%] bg-[#FFD60A] mx-auto rounded-lg flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s"
                alt="Profile"
              />
            </div>
            <h3 className="text-xl font-semibold capitalize text-gray-800">
              Zia Shah
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <span className="flex items-center gap-[2px]">
              <FaRupeeSign className="w-4 h-4 text-gray-900 mb-1" />
              <p className="text-lg font-bold text-gray-900">193.20</p>
            </span>
            <p className="text-sm text-gray-500 font-medium">5.1 KM</p>
          </div>
        </div>

        {/* Ride Details Section */}
        <div className="flex-1 flex flex-col px-4 space-y-4">
          {/* Pickup Location */}
          <div className="flex flex-col items-start">
            <div className="mt-1">
              <p className="text-sm text-gray-400 font-medium uppercase">
                Pick up
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">562/11-A</h2>
              <p className="text-gray-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex flex-col items-start">
            <div className="mt-1">
              <p className="text-sm text-gray-400 font-medium uppercase">
                Drop Off
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Third Wave Coffee</h2>
              <p className="text-gray-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="p-4 flex gap-2">
          <button
            onClick={() => {
              setIsRidePopUp(false);
            }}
            className="w-full py-3 text-gray-500 border font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Reject Ride
          </button>
          <button
            onClick={() => {
              setIsRidePopUp(false);
              setConfirmIsRidePopUp(true);
            }}
            className="w-full py-3 bg-[#FFD60A] text-black font-semibold rounded-lg hover:bg-opacity-80 transition-colors"
          >
            Accept Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
