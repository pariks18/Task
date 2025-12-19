import { Home, PenTool, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative">
     
      <div className="absolute top-12 right-20 w-3 h-3 bg-blue-500 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
       
        <h2 className="text-4xl font-semibold text-gray-800">
          Why Choose Us?
        </h2>

     
        <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 mb-16 rounded"></div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
         
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-6">
              <Home size={26} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Potential ROI
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed">
              Whether you are looking to buy or sell, we help you maximize
              your investment with strong market insight.
            </p>
          </div>

     
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-6">
              <PenTool size={26} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Design
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed">
              Our creative design solutions ensure properties stand out
              and attract the right buyers quickly.
            </p>
          </div>

        
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-6">
              <DollarSign size={26} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Marketing
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed">
              Strategic digital marketing campaigns designed to increase
              exposure and generate real results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;