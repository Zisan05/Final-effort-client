import { FaCameraRetro,FaCar} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GiEating } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
const TagsPage = () => {
    return (
        <div className="mt-[50px] mb-[150px]">
            <h1 className="text-[40px] text-center text-blue-500 font-bold underline ">All Tags</h1>
            <h1 className="text-[40px] text-center text-emerald-300 font-bold mb-[30px]">Here we have all the tags that provide our website</h1>
          <div className=" flex flex-col md:flex-col lg:flex-row justify-around ml-[100px] md:ml-[300px] lg:ml-0">
          <div>
             <GrTechnology className="text-[130px]"></GrTechnology>
             <p className="text-[25px] font-bold text-purple-700">Technology</p>
          </div>
          <div>
             <GiEating className="text-[130px] ml-[30px]"></GiEating>
             <p className="text-[25px] font-bold text-purple-700 ml-[40px]">Food</p>
          </div>
          <div>
             <FaCameraRetro className="text-[130px]"></FaCameraRetro>
             <p className="text-[25px] font-bold text-purple-700">Photography</p>
          </div>
          <div>
             <FaCar className="text-[130px]"></FaCar>
             <p className="text-[25px] font-bold text-purple-700 ml-[30px]">Travel</p>
          </div>
          <div>
             <IoMdFitness className="text-[130px]"></IoMdFitness>
             <p className="text-[25px] font-bold text-purple-700 ml-[30px]">Fitness</p>
          </div>
          </div>

        </div>
    );
};

export default TagsPage;