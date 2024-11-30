import React from "react";
import { CiWarning } from "react-icons/ci";

const UnsupportedScreenModal = () => {
  return (
    <>
      {/* Blurred Background */}
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl text-center">
          {/* Icon and Heading */}
          <div className="flex flex-col items-center mb-6">
            <CiWarning className="h-12 w-12 text-red-500 mb-2" />
            <h2 className="text-2xl font-bold text-gray-900">
              Unsupported Screen Size
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            This application is{" "}
            <span className="font-semibold text-gray-900">
              optimized for mobile screens
            </span>
            . Please{" "}
            <span className="font-semibold text-gray-900">
              resize your browser
            </span>{" "}
            or switch to a{" "}
            <span className="font-semibold text-gray-900">mobile device</span>{" "}
            to continue.
          </p>

          {/* Subtext */}
          <p className="text-sm text-gray-500">
            Thank you for your understanding!
          </p>
        </div>
      </div>
    </>
  );
};

export default UnsupportedScreenModal;
