import { MapPinHouse } from "lucide-react";
import { RiArrowDownWideLine } from "react-icons/ri";

const WaitingForDriver = ({ setWaitingForDriver }) => {
  return (
    <div className="w-full flex flex-col bg-white shadow-lg rounded-t-3xl">
      <div className="px-5 py-4 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-[26px] font-bold leading-tight">
          Meet at the pickup point
        </h1>
        <div className="bg-black text-white px-3 py-1.5 text-center">
          <div className="text-2xl font-medium leading-none">2</div>
          <div className="text-xs font-medium">min</div>
        </div>
      </div>
      <div className="p-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjTxRiHVIbiKFtzSIXF5BpjADNAVDXchaDQ&s"
              alt="Driver"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-12">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="Car"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-medium">John Doe</div>
          <div className="text-sm text-gray-600">Toyota Camry</div>
        </div>
      </div>
      <div className="mt-auto p-5 border-t border-gray-200">
        <div className="flex items-start gap-4">
          <MapPinHouse className="w-6 h-6 mt-1 flex-shrink-0 text-gray-600" />
          <div>
            <div className="text-[22px] font-bold leading-tight">562/11-A</div>
            <div className="text-[15px] text-gray-600 mt-0.5">
              Kaikondrahalli, Bengaluru, Karnataka
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-1">
        <button
          className="absolute left-1/2 transform -translate-x-1/2 top-1 w-12 h-6 flex items-center justify-center"
          onClick={() => setWaitingForDriver(false)}
        >
          <RiArrowDownWideLine className="text-gray-400 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default WaitingForDriver;
