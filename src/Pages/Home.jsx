import Card from "../Reusesable/Card";
import Button from "../Reusesable/Button";
import { MdLocalGasStation } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SearchSection } from "../Components/SearchSection";

const Home = () => {
  return (
    <div className="flex justify-center gap-4 min-h-screen">
      <div className="w-6/6">
        <div>
          <SearchSection />
        </div>
        <div className="flex justify-center mt-6 gap-6 flex-wrap">
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
          <Link to="/category">
            <Button
              btnText="Show more car"
              className="py-2 mt-8 text-[14px] px-6 rounded"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
