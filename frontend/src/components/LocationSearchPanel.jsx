const LocationSearchPanel = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <button className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
          <span className="text-gray-800 font-medium">Nearest Station</span>
        </button>
        <button className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
          <span className="text-gray-800 font-medium">
            Popular Destinations
          </span>
        </button>
        <button className="flex items-center p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
          <span className="text-gray-800 font-medium">Your Favorites</span>
        </button>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
