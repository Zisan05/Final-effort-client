import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ManageUser = () => {

    const userData = useLoaderData();
       console.log(userData);

       const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          try {
            const response = await fetch('https://final-effort-server-puce.vercel.app/users');
            
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
          }
        },
      });

       const handleUpadate = (id,role) => {
            console.log(id,role);
            const updateData = {role};
            
            fetch(`https://final-effort-server-puce.vercel.app/users/${id}`,{
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(updateData) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire(
                    'success',
                    'Successfully Updated your assignment',
                    'success'
                  )
            }
            refetch({ queryKey: ['users'] });
           
        }) 
       }
    return (
        <div>
            <div className="overflow-x-auto bg-lime-400">
                <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">Users</h1>
  <table className="table  h-[600px]">
    {/* head */}
    <thead>
      <tr className="text-white font-bold text-[20px]">
        <th>#</th>
        <th>User name</th>
        <th>User email</th>
        <th>Subscription Status</th>
        <th>Activities</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((item,index) => <tr className="text-[20px] font-bold " key= {item._id}>
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.Badge}</td>
            <td>
                {
                    item.role === "admin"? "admin":
                    <button onClick={() =>handleUpadate(item._id,item.role)} className="btn bg-orange-600 text-white">Make Admin</button>
                }
            </td>
          </tr>)
      }
      

    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;