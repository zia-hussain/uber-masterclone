import React from "react";

const CaptainDetails = () => {
  return (
    <div className="h-full">
      <div
        className={`absolute top-3 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-300 rounded-full mb-4 transition-all duration-300
  `}
      ></div>
      <div className="h-full flex flex-col justify-center">
        {/* Profile Header */}
        <div className="p-6 flex items-center justify-between mb-6 h-1/4 mt-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden ]">
              <img
                src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg"
                alt="Captain"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-semibold">Jeremiah Curtis</h2>
              <p className="text-sm text-gray-500">Basic level</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">$325.00</p>
            <p className="text-sm text-gray-500">Earned</p>
          </div>
        </div>

        {/* Stats Card */}
        <div className="w-full p-6 h-3/4 ">
          <div className="flex bg-[#FFD60A] rounded-lg items-center justify-center h-[90%] gap-4">
            <div className="text-center ">
              <div className="flex flex-col items-center justify-center gap-1">
                <i className="text-3xl text-gray-600 font-thin ri-time-line"></i>
                <span className="font-semibold">10.2</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">HOURS ONLINE</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <i className="text-3xl text-gray-600 font-thin ri-speed-up-line"></i>
                <span className="font-semibold">30 KM</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">TOTAL DISTANCE</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <i className="text-3xl text-gray-600 font-thin ri-file-list-3-line"></i>
                <span className="font-semibold">20</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">TOTAL JOBS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
