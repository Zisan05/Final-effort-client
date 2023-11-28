import Swal from "sweetalert2";

const MakeAnnoucement = () => {

     const handlAddAnnounce = e => {
        e.preventDefault()
    const form = e.target;
    const authorName = form.name.value;
    const authorImage = form.photo.value;
    const Title = form.title.value;
    const Description = form.Description.value;

    const newPost = {authorName,authorImage,Title,Description,}

    fetch('https://final-effort-server-puce.vercel.app/announces',{
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged)
        {
            Swal.fire(
                'success',
                'Successfully added your Post',
                'success'
              )
        }
        form.reset();
    })
     
     }
    return (
        <div>
            <div className="bg-gray-600">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">Make announcement</h1>

            <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-orange-400">Add Announcement!</h1>
    </div>
    <div className="card w-full  shadow-2xl bg-lime-400">
      <form onSubmit={handlAddAnnounce} className="card-body w-[500px] mb-[250px] h-[300px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Author Name
</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Image</span>
          </label>
          <input type="text" name="photo" placeholder="Image" className="input input-bordered"/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Title" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="Description" placeholder="Description" className="input input-bordered"/>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-orange-400">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
        </div>
    );
};

export default MakeAnnoucement;