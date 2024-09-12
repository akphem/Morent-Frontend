import { FaCog, FaSearch, FaSlidersH, FaBell } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-blue-600"><a href="/">MORENT</a></h1>
      </div>
      <div className="relative flex-1 mx-4 lg:mx-8">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full py-2 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <FaSlidersH className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="w-6 h-6 text-gray-500" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
        </button>
        <button>
          <FaCog className="w-6 h-6 text-gray-500" />
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-blue-600 hover:underline">Sign In</button>
          <button className="text-blue-600 hover:underline">Sign Up</button>
        </div>
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <button className="lg:hidden text-gray-500 ml-4">
        <FaSlidersH className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar;
