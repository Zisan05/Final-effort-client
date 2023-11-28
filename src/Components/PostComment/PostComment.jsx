import { useLoaderData, useParams } from "react-router-dom";

import {useState,useEffect} from "react";


const PostComment = () => {

  const [save,setSave] = useState([])

  const [feedback,setFeedback] = useState(false)

    const commentdata =useLoaderData();

    

    const {postTitle} = useParams();

    

    
  useEffect( () => {
    const FilterData = commentdata.filter(item =>item.postTitle===postTitle);

   

    setSave(FilterData);

    
  },[commentdata,postTitle])


     
 
         
    
    return (
        <div className="bg-orange-400">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">Comments of this post</h1>
            <div className="overflow-x-auto h-[900px] ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-white text-[20px] font-bold">
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
        save.map((item,index) => <tr className="text-sky-500 font-bold text-[20px]" key = {item._id}>
            <th>{index+1}</th>
            <td>{item.email}</td>
            <td>{item.comment}</td>
            <td>
            <details className="dropdown">
  <summary className="m-1 btn bg-lime-300">Feedback</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-600 rounded-box w-52 text-white">
    <li><a onClick={() => setFeedback(true)}>Good</a></li>
    <li><a onClick={() => setFeedback(true)}>OK OK</a></li>
    <li><a onClick={() => setFeedback(true)}>Bad</a></li>
  </ul>
</details>
            </td>
            {
              feedback ? <td><button onClick={() => setFeedback(false)} className="btn  bg-red-400">Report</button></td> : <td><button onClick={() => setFeedback(false)} disabled className="btn  bg-red-400">Report</button></td>
            }
            
            
          </tr>
          )}
      

    </tbody>
  </table>
</div>
        </div>
    );
};

export default PostComment;