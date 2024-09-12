import Card from '../Reusesable/Card';
import Button from '../Reusesable/Button';
import { MdLocalGasStation } from 'react-icons/md';
import { TbSteeringWheel } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import SideBar from '../Reusesable/Sidebar';

const Home = () => {
  return (
    <section className="p-4 bg-blue-50">
      <div className="flex flex-col lg:flex-row">
        
      <div className='bg-white z-50  w-110 h-fit p-4'>
      <SideBar className="hidden lg:block lg:pt-10 lg:mt-10" />
      </div>
      

        <div className="flex-1 px-2">
          <div className="flex justify-end pt-4 gap-4 flex-wrap">
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Pick-Up Location"
                  className="border rounded p-2 w-full md:w-auto"
                />
                <input
                  type="date"
                  className="border rounded p-2 w-full md:w-auto"
                />
                <input
                  type="time"
                  className="border rounded p-2 w-full md:w-auto"
                />
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hidden md:block">
                Swap
              </button>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Drop-Off Location"
                  className="border rounded p-2 w-full md:w-auto"
                />
                <input
                  type="date"
                  className="border rounded p-2 w-full md:w-auto"
                />
                <input
                  type="time"
                  className="border rounded p-2 w-full md:w-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
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
              <Card
                label="Koenigsegg"
                heart={<FaHeart />}
                labelType="sport"
                image="/suv blue.png"
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
                image="/suv brown.png"
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
                image="/suv3.png"
                imageAlt="moving car"
                gasIcon={<MdLocalGasStation />}
                gasUnit="80L"
                motor="Manual"
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
              <Card
                label="Koenigsegg"
                heart={<FaHeart />}
                labelType="sport"
                image="/suv brown.png"
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
                image="/carImage.png"
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
                image="/suv blue.png"
                imageAlt="moving car"
                gasIcon={<MdLocalGasStation />}
                gasUnit="80L"
                motor="Manual"
                steeringIcon={<TbSteeringWheel />}
                userName="People"
                userIcon={<FaUserFriends />}
                amount="$99.00/"
              />
            </div>

            <div className="flex items-center justify-center">
              <Link to="/details">
                <Button
                  btnText="Show more cars"
                  className="py-2 mt-8 text-[14px] px-6 rounded"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
