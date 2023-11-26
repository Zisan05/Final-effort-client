import { useLoaderData, useParams } from "react-router-dom";

import {useState,useEffect} from "react";


const PostComment = () => {

  const [save,setSave] = useState([])

    const commentdata =useLoaderData();

    console.log(commentdata);

    const {postTitle} = useParams();

    console.log(postTitle)

    // console.log(postTitle)
   
    //  const FilterData = commentdata.filter(item =>item.postTitle===postTitle);
  useEffect( () => {
    const FilterData = commentdata.filter(item =>item.postTitle===postTitle);

    // console.log(FilterData)

    setSave(FilterData);

    
  },[commentdata,postTitle])

  console.log(save)
     
 
         
    
    return (
        <div className="bg-gray-600">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">Comments of this post</h1>
            <div className="overflow-x-auto h-[500px] ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white">
        <th>#</th>
        <th>Commenter Email</th>
        <th>Comment</th>
        <th>Activities</th>
        <th>Activities</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        save.map((item,index) => <tr className="text-purple-200" key = {item._id}>
            <th>{index+1}</th>
            <td>{item.email}</td>
            <td>{item.comment}</td>
            <td>
            <details className="dropdown">
  <summary className="m-1 btn bg-lime-300">Feedback</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-600 rounded-box w-52">
    <li><a>Good</a></li>
    <li><a>OK OK</a></li>
    <li><a>Bad</a></li>
  </ul>
</details>
            </td>
            <td><button className="btn disabled bg-red-400">Report</button></td>
            
          </tr>)
      }
      

    </tbody>
  </table>
</div>
        </div>
    );
};

export default PostComment;