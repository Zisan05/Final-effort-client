import { useState,useContext } from "react";
import { BiSolidDownvote, BiUpvote } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {FacebookShareButton} from 'react-share'
import { AuthContext } from "../AuthProvider/AuthProvider";

const PostDetails = () => {

    const {user} = useContext(AuthContext)

   
  
    const{_id,authorImage, postTitle,authorName,postDescription
    , tag , postTime,upVoteCount,downVoteCount} = useLoaderData();

    const [upvote, setupVote] = useState(upVoteCount);
    
    const [downvote, setdownVote] = useState(downVoteCount);
    

    const handleUpdate = () =>{
        const updateData = {upVoteCount:upvote,downVoteCount: downvote};
        
        console.log(updateData);
        
        fetch(`https://final-effort-server-puce.vercel.app/posts/${_id}`,{
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
                    'Successfully Updated your vote',
                    'success'
                  )
            } 
           
        })
    }

    const handleComment = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;

        const createData = {comment: comment,email: user?.email,postTitle: postTitle}
        console.log(createData);

        fetch('https://final-effort-server-puce.vercel.app/comments',{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(createData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged)
            {
                Swal.fire(
                    'success',
                    'Successfully added your Comment',
                    'success'
                  )
            }
            form.reset();
        })
        
    } 
      
    return (
        <div>
            <div className="card  lg:w-[1000px] mx-auto lg:card-side bg-violet-300 shadow-xl mt-[50px]">
  <figure><img className="h-full w-full md:w-full lg:w-[400px]" src={authorImage} alt="Album"/></figure>
  <div className="card-body">
  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Post Title: </span>{postTitle}</h2>
  <h2 className="card-title font-bold text-blue-400"><span className='text-black'> Author Name: </span>{authorName}</h2>
  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Description: </span>{postDescription}</h2>
  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Tag: </span>{tag}</h2>
  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Post Time: </span>{postTime}</h2>
  <h2 onClick={() => setupVote(upvote+1) }   className="card-title font-bold text-blue-400"><span className='text-black flex items-center'>Vote<BiUpvote className='text-[25px]'></BiUpvote>:</span> {upvote}</h2>
  <h2 onClick={() => setdownVote(downvote+1)} className="card-title font-bold text-blue-400"><span className='text-black flex items-center'>Vote<BiSolidDownvote  className='text-[25px]'></BiSolidDownvote>:</span> {downvote}</h2>
    <div className="card-actions">
      <button onClick={handleUpdate} className="btn btn-primary">Update Vote</button>
      <FacebookShareButton url={`https://final-effort-server-puce.vercel.app/posts/${_id}`} title={postTitle}>
      <button className="btn bg-rose-500">Share Post</button>
      </FacebookShareButton>
    </div>
    <div>
       <form  onSubmit={handleComment} action="">
       <input className="py-[10px] px-[70px]" type="text" name="comment" id="" />
    <button className="btn bg-fuchsia-500">Comment</button>
       </form>
    </div>
    </div>

</div>
        </div>
    );
};

export default PostDetails;