import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownvote, BiUpvote } from "react-icons/bi";


const Posts = () => {

    const [postData,setpostData] =useState([]);

useEffect( () => {
    fetch('http://localhost:5000/posts')
    .then(res => res.json())
    .then(data => {
        setpostData(data);
    })
},[]);

console.log(postData);



    
    return (
        <div>
            <h1 className='text-[48px] underline text-fuchsia-300 font-bold text-center'>All Posts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:ml-[60px] lg:ml-[150px]'>
            {
                postData.map(item => <div key={item._id} className="card w-[300px] bg-lime-300 shadow-xl">
                <figure><img className='w-full h-[250px]' src={item.authorImage} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Title: </span>{item.postTitle}</h2>
                  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Tag: </span>{item.tag}</h2>
                  <h2 className="card-title font-bold text-blue-400"><span className='text-black'>Time:</span> {item.postTime}</h2>
                  <h2 className="card-title font-bold text-blue-400"><span className='text-black flex items-center'>Vote<BiUpvote className='text-[25px]'></BiUpvote>:</span> {item.upVoteCount}</h2>
                  <h2 className="card-title font-bold text-blue-400"><span className='text-black flex items-center'>Vote<BiSolidDownvote className='text-[25px]'></BiSolidDownvote>:</span> {item.downVoteCount}</h2>
                 
                  
                  <div className="card-actions justify-end">
                    <Link to = {`/details/${item._id}`}><button className="btn bg-blue-400 font-bold">Post</button></Link>
                  </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default Posts;