import { Link, useLoaderData } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UserMyPost = () => {
    const postData = useLoaderData();

    

  
    
    const {user} = useContext(AuthContext);
         
     

     
     const [newpost,setNewpost] = useState([]);
    
     
     useEffect( () => {
      const filterData = postData.filter(item => item.email === user.email);
      setNewpost(filterData);
     } ,[postData,user.email])

    

     

     const handleDelete = id => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://final-effort-server-puce.vercel.app/posts/${id}`,{
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          const remainingData = newpost.filter(item => item._id !== id)
          setNewpost(remainingData);
          Swal.fire({
            title: "Deleted!",
            text: "Your Post has been deleted.",
            icon: "success"
          });
        }
     })     
        }
      });
      
        
         
     }

    return (
        <div className="bg-orange-400 h-[500px]">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">My post</h1>
            <div>
                
                        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white font-bold text-[20px]">
      <th>#</th>
        <th> Post Title</th>
        <th>Tag</th>
        <th>UpVote</th>
        <th>DownVote</th>
        <th>Activities</th>
        <th>Activities</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
            newpost.map(data => <tr className="text-lime-200 text-[20px] font-bold " key={data._id}>
      
      
        <th>1</th>
        <td>{data.postTitle}</td>
        <td>{data.tag}</td>
        <td>{data.upVoteCount}</td>
        <td>{data.downVoteCount}</td>
        <Link to={`postcomment/${data.postTitle}`}>
        <td><button className="btn bg-purple-800 text-white">Comment</button></td></Link>
        <td><button onClick={() => handleDelete(data._id)} className="btn bg-purple-800 text-white">Delete</button></td>
      </tr>
      )}
    </tbody>
  </table>
</div>
 </div>
                
 </div>
    );
};

export default UserMyPost;