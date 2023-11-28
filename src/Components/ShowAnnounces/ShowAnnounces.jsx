import {useState,useEffect} from 'react'
const ShowAnnounces = () => {

const [annData,setannData] = useState([]);

useEffect( () => {
    fetch('https://final-effort-server-puce.vercel.app/announces')
    .then(res => res.json())
    .then(data => setannData(data))
} ,[])

console.log(annData);

    return (
        <div>
            {
                annData.length > 0 ? <div className='mb-[50px]'>
                <h1 className="text-[40px] text-orange-600 text-center font-bold underline ">The Announces From the Admin</h1>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-[50px] gap-[20px]'>
                    {
                        annData.map(item => <div key ={item._id} className="card card-compact w-[380px] mx-auto bg-orange-600 shadow-xl">
                        <figure><img className='h-[200px] w-full' src={item.authorImage} alt="" /></figure>
                        <div className="card-body text-white ">
                          <h2 className="card-title">AuthorName: <span className='text-black'>{item.authorName}</span></h2>
                          <h2 className="card-title">Title:  <span className='text-black'>{item.Title}</span></h2>
                          <h2 className="card-title">Description: <span className='text-black'>{item.Description}</span></h2>
                          
                        </div>
                      </div>)
                    }
                </div>
            </div> : <div></div>
            }
        </div>
    );
};

export default ShowAnnounces;