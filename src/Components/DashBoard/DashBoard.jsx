import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdAnnouncement } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const DashBoard = () => {

    const {user} = useContext(AuthContext);

 const data = useLoaderData();

 console.log(data.length);

 const filterData = data.filter(item => item.email === user?.email); 

 

 const Role = filterData.map(({ role }) => role);

    return (
        <div className="flex lg:w-[70%] mx-auto mt-[100px]">
            <div className="md:w-[256px] lg:w-[256px] min-h-full bg-yellow-200 ">
                <Link to = {"/"}><h1 className="text-[30px] text-center font-bold text-blue-200">Post Baz</h1></Link>
                <ul className="menu">
                    {/* dashboard list */}

                    {
                        Role =="admin" ? <>
                    <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/adminprofile"}><ImProfile></ImProfile>Admin Profile</NavLink></li>
                      
                    <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/useraddpost"}> <MdOutlinePostAdd></MdOutlinePostAdd>Add Post</NavLink></li>

                    <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/manageuser"}> <MdManageAccounts></MdManageAccounts>Manage User</NavLink></li>
                    <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/annoucement"}> <MdAnnouncement></MdAnnouncement>Make announcement</NavLink></li>

                <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/"}><FaHome></FaHome> Home page</NavLink></li>
                 </>: <>
                    <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/userprofile"}><ImProfile></ImProfile>user Profile</NavLink></li> 

                 <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/useraddpost"}> <MdOutlinePostAdd></MdOutlinePostAdd>Add Post</NavLink></li>   
                 <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/dashboard/usermypost"}> <MdOutlinePostAdd></MdOutlinePostAdd>MY Post</NavLink></li>   
                 <li className="py-[15px]">
                    
                    <NavLink className=" py-[15px]" to ={"/"}><FaHome></FaHome> Home page</NavLink></li>
                        </>
                    }

                    
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;
