const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      
    

      <div className="mt-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          About Us
        </h2>

        
        <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 mb-6 rounded"></div>

        <p className="text-gray-500 text-xl leading-relaxed mb-8">
          We take pride in providing top-notch real estate services and a
          commitment to work hard, listen, and follow through. We provide
          quality services to build relationships with clients and, more
          importantly, maintain those relationships by communicating
          effectively.
        </p>

        <button className="px-7 py-2 border border-blue-500 text-blue-500 rounded-full text-sm font-medium transition hover:bg-blue-500 hover:text-white">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;