import Swal from "sweetalert2";


const UserAddPost = () => {

const handlAddPost  = e => {
    e.preventDefault()
    const form = e.target;
    const authorName = form.name.value;
    const email = form.email.value;
    const authorImage = form.photo.value;
    const postTitle = form.title.value;
    const postDescription = form.Description.value;
    const tag = form.tag.value;
    const postTime = form.postTime.value;
    const upVoteCount = parseInt(form.upVoteCount.value);
    const downVoteCount= parseInt(form.downVoteCount.value);


     
    const newPost = {authorName,email,authorImage,postTitle,postDescription,tag,postTime,upVoteCount,downVoteCount}
            
    fetch('http://localhost:5000/posts',{
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
        <div className="bg-gray-600">
            <h1 className="text-[40px] text-center text-violet-800 font-bold underline ">Add Post</h1>

            <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-orange-400">Add A Post!</h1>
    </div>
    <div className="card w-full  shadow-2xl bg-lime-400">
      <form onSubmit={handlAddPost} className="card-body w-[500px] mb-[250px] h-[720px] ">
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
            <span className="label-text"> Author Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Title</span>
          </label>
          <input type="text" name="title" placeholder="Post Title" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Description</span>
          </label>
          <input type="text" name="Description" placeholder="Post Description" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tag</span>
          </label>
          <input type="text" name="tag" placeholder="Tag" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PostTime</span>
          </label>
          <input type="text" name="postTime" placeholder="postTime" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">upVote</span>
          </label>
          <input type="text" name="upVoteCount" value={0} className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">DownVote</span>
          </label>
          <input type="text" name="downVoteCount" value={0} className="input input-bordered"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-400">Post</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default UserAddPost;