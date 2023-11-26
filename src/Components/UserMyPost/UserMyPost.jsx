import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserMyPost = () => {
    const postData = useLoaderData();
    

    const {user} = useContext(AuthContext);
         
     const filterData = postData.filter(item => item.email === user.email)

    return (
        <div className="bg-gray-500 h-[500px]">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">My post</h1>
            <div>
                
                        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white">
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
            filterData.map(data => <tr className="text-white" key={data._id}>
      
      
        <th>1</th>
        <td>{data.postTitle}</td>
        <td>{data.tag}</td>
        <td>{data.upVoteCount}</td>
        <td>{data.downVoteCount}</td>
        <Link to={`postcomment/${data.postTitle}`}>
        <td><button className="btn bg-purple-800 text-white">Comment</button></td></Link>
        <td><button className="btn bg-purple-800 text-white">Delete</button></td>
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