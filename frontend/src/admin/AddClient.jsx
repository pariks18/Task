import { useState } from "react";
import api from "../services/api";

const AddClient = () => {
  const [client, setClient] = useState({
    image: "",
    name: "",
    description: "",
    designation: ""
  });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/clients", client);
    alert("Client added");
    setClient({ image: "", name: "", description: "", designation: "" });
  };

  return (
    <section className="mb-20 flex justify-center">
      <div className="w-full max-w-2xl">
       
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center relative 
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-blue-500
         after:transition-all after:duration-300
         hover:after:w-full">
          Add Client
        </h3>

        
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8  shadow space-y-6 border border-black"
        >
          
          <div>
            <label className="block text-base text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={client.image}
              onChange={handleChange}
              className="w-full border px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="block text-base text-gray-700 mb-2">
              Client Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={client.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

       
          <div>
            <label className="block text-base text-gray-700 mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              placeholder="CEO, Company"
              value={client.designation}
              onChange={handleChange}
              className="w-full border px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-base text-gray-700 mb-2">
              Testimonial
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Client feedback..."
              value={client.description}
              onChange={handleChange}
              className="w-full border px-4 py-3 text-base resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white
                px-10 py-3  text-base font-medium transition"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddClient;
