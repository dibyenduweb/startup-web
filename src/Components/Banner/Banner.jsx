const Banner = () => {
  return (
    <div
      className="bg-cover bg-center mt-14 py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      style={{ backgroundImage: "url(https://i.ibb.co/gmf5KvZ/Image.png)" }}
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        Transform Your Vision into Reality
<br className="hidden sm:block" />
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-1xl mt-3 max-w-3xl mx-auto">
        At Web Stack, we craft stunning websites and intuitive user experiences to elevate your brand. Whether you’re a startup or an established business, we provide tailored solutions that engage your audience and drive results!
       </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <button className="bg-sky-600 text-white py-3 px-6 rounded-md text-sm md:text-base">
            Get a Quote
          </button>
          <button className="bg-transparent border border-sky-600 text-sky-600 py-3 px-6 rounded-md text-sm md:text-base mt-3 sm:mt-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
