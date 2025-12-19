const Features = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
     
      <div className="absolute top-16 left-10 w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-orange-500 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
   
        <div className="ml-9">
          <h2 className="text-6xl font-semibold text-blue-600 mb-4">
        Built for Modern Living
          </h2>

          <p className="text-gray-500 text-4m leading-relaxed max-w-md">
            We simplify the journey of finding your perfect space. From curated
      listings to expert guidance, our approach is transparent, efficient,
      and designed around your lifestyle.
          </p>
        </div>

       
        <div className="relative flex justify-center items-center">
          
     
          <div className="w-72 h-72 rounded-full bg-white shadow-lg p-3 z-10">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
              alt="Realtor"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          
          <div className="absolute top-0 right-10 w-32 h-32 rounded-full bg-white shadow p-2">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Client meeting"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

    
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white shadow p-2">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
              alt="Happy client"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;