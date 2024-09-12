import React, { useState } from "react";
import SideBar from "../Reusesable/Sidebar";
import Card from "../Reusesable/Card";
import {
  FaHeart,
  FaStar,
  FaStarHalfAlt,
  FaBars,
  FaUserFriends,
} from "react-icons/fa";
import Reviews from "../Reusesable/Review";
import { MdLocalGasStation } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";

export const Details = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-white z-50 lg:z-auto lg:static lg:w-1/5 p-4 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0`}
        >
          <SideBar />
        </div>

        {/* Sidebar toggle button for mobile */}
        <div className="lg:hidden p-4">
          <button
            onClick={(e) => {
              toggleSidebar();
              e.stopPropagation();
            }}
            className="text-2xl"
          >
            <FaBars />
          </button>
          

          
        </div>

        {/* Main content */}
        <div className="w-full lg:w-4/5 p-4 lg:ml-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Image and Reviews section */}
            <div className="w-full lg:w-1/2 bg-white">
              <div className="mb-4">
                <img
                  src="/src/images/View (1).png"
                  alt="Nissan GT-R"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/src/images/mme.png"
                  alt="Car exterior"
                  className="w-full rounded-lg border-2 border-blue-600"
                />
                <img
                  src="/src/images/mme2.png"
                  alt="Car interior"
                  className="w-full rounded-lg"
                />
                <img
                  src="/src/images/mme3.png"
                  alt="Car seats"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Text and Details section */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl p-10 text-base">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold">Nissan GT - R</h1>
                <FaHeart className="text-red-500 text-2xl" />
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-gray-600">440+ Reviewer</span>
              </div>
              <p className="text-gray-700 mb-6">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>
              <div className="grid grid-cols-2 gap-y-4 mb-6">
                <div>
                  <p className="text-gray-600">Type Car</p>
                  <p className="font-semibold">Sport</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Capacity <FaUserFriends />
                  </p>
                  <p className="font-semibold">2 Person</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    Steering <TbSteeringWheel />
                  </p>
                  <p className="font-semibold">Manual</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    {" "}
                    Gasoline <MdLocalGasStation />
                  </p>
                  <p className="font-semibold"> 70L</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-bold">
                    $80.00
                    <span className="text-blue-600 text-lg font-normal">
                      / day
                    </span>
                  </p>
                  <p className="text-gray-400 line-through">$100.00</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <a href="/payment">Rent Now</a>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Cars section */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-4 w-full">
              {/* Reviews Section */}
              <div className="mt-8 w-full">
                <Reviews />
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <span>
                <h2 className="text-2xl font-bold">Recent Cars</h2>
              </span>
              <span>
                <a href="#" className="text-blue-600">
                  View All
                </a>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                label="Koenigsegg"
                heart={<FaHeart />}
                labelType="sport"
                image="/car_rental1.png"
                imageAlt="moving car"
                gasIcon={<MdLocalGasStation />}
                gasUnit="80L"
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
              <Card
                label="Koenigsegg"
                heart={<FaHeart />}
                labelType="sport"
                image="/car_rental2.png"
                imageAlt="moving car"
                gasIcon={<MdLocalGasStation />}
                gasUnit="80L"
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
              <Card
                label="Koenigsegg"
                heart={<FaHeart />}
                labelType="sport"
                image="/image 7.png"
                imageAlt="moving car"
                gasUnit="80L"
                gasIcon={<MdLocalGasStation />}
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
            </div>
          </div>

          {/* Recommended Cars section */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Recommended Cars</h2>
              <a href="#" className="text-blue-600">
                View All
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                label="Koenigsegg"
                heart={<FaHeart />}
                labelType="sport"
                image="/Car 3.png"
                imageAlt="moving car"
                gasIcon={<MdLocalGasStation />}
                gasUnit="80L"
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
              <Card
                label="NissanGT-R"
                heart={<FaHeart />}
                labelType="sport"
                image="/car2.png"
                imageAlt="moving car"
                gasIcon={<MdLocalGasStation />}
                gasUnit="90L"
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
              <Card
                label="Rolls-Royce"
                heart={<FaHeart />}
                labelType="sport"
                image="/Car4.png"
                imageAlt="Car Image"
                gasIcon={<MdLocalGasStation />}
                gasUnit="80L"
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar on Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Details;
