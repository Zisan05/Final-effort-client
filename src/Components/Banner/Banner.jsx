

const Banner = () => {
    return (
        <div>
            <div className="hero w-full h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/Q8rMjBZ/images.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl md:text-5xl lg:text-5xl font-bold text-red-300">Just post your idea and see what people think about it!!</h1>
      <input type="text" name="" placeholder="Search with post tags" id="" className=" px-[45px] md:px-[70px] lg:px-[70px] py-[11px] rounded-[4px] md:mr-[10px]" />
      <button className="btn bg-red-400 font-bold">Search</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;