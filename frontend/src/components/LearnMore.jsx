const LearnMore = () => {
  return (
    <section
      className="relative h-80 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.vecteezy.com/free-vector/white-background')",
      }}
    >
   
      <div className="absolute inset-0 bg-black/50"></div>

  
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-6">
          Learn more about our listing process, as well as our additional
          staging and design work.
        </h2>

        <a href="#clients" className="bg-white text-gray-800 px-8 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          LEARN MORE
        </a>
      </div>
    </section>
  );
};

export default LearnMore;