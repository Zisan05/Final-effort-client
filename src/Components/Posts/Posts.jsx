import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownvote, BiUpvote } from "react-icons/bi";


const Posts = () => {

    // pagination
    const [totalData,settotalData] = useState(0);
    const [itemPerPage ,setitemPerPage] = useState(5); 
    const [currentPage,setcurrentPage] = useState(0); 

    useEffect(() => {
        fetch('http://localhost:5000/postsCount')
        .then(res => res.json())
        .then(data => {
         settotalData(data.count);
        })
      },[])

      const numberOfPage = Math.ceil(totalData/itemPerPage);

      const pages = [];
   for(let i = 0; i<numberOfPage;i++){
     pages.push(i)
   }
   console.log(pages);


    //   other things
    const [postData,setpostData] =useState([]);
    const [asc,setAsc] = useState(true);  

useEffect( () => {
    fetch(`http://localhost:5000/posts?page=${currentPage}&size=${itemPerPage}&sort=${asc ? 'asc' : 'dsc'}`)
    .then(res => res.json())
    .then(data => {
        setpostData(data);
    })
},[asc,currentPage,itemPerPage]);

console.log(postData);



    
    return (
        <div>
            <h1 className='text-[48px] underline text-fuchsia-300 font-bold text-center'>All Posts</h1>
            <h1 className='text-[48px] text-fuchsia-300 font-bold text-center items-center mt-[10px]'>You can sort all post according to the popularity in votes <button onClick={() => setAsc(!asc)} className='btn ml-[10px] bg-cyan-400 font-bold'>{
                asc ? 'High Popularity' : 'Low Popularity'
            }
            </button> </h1>
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
            <div className=' ml-[70px] md:ml-[300px] lg:ml-[700px] mt-[50px] mb-[50px]'>
            {
            pages.map(page => <button onClick={() => setcurrentPage(page)} className="bg-black hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 text-white font-bold ml-[10px] py-2 px-4 rounded" key = {page.id}>{page}</button>)
          }
            </div>
        </div>
    );
};

export default Posts;