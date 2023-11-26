import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData} from "react-router-dom";

const AdminProfile = () => {
    const {user} = useContext(AuthContext);

   
    const data = useLoaderData();

    

    const filterData = data.filter(item => item.email === user.email);

    
         

    return (
        <div className="bg-lime-400 h-[700px] lg:w-[900px]">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">Admin profle</h1>

            <div>
                {
                    filterData.map(item => <div className="flex flex-col md:flex-col lg:flex-row items-center justify-around lg:mt-[100px]" key={item._id}>
                      <img className="w-[200px] h-[200px] rounded-full"  src={item.photo} alt="" /> 

                      <div>
                      <h1 className="text-purple-600 font-bold text-[25px] mb-[20px]"><span className="text-white">Admin id: </span>{item._id}</h1>   
                      <h1 className="text-purple-600 font-bold text-[25px] mb-[20px] "><span className="text-white">Admin Name: </span>{item.name}</h1>   
                      <h1 className="text-purple-600 font-bold text-[25px] mb-[20px]"><span className="text-white">Admin Email: </span>{item.email}</h1>   
                       </div>  

                    </div>)
                }
            </div>
        </div>
    );
};

export default AdminProfile;