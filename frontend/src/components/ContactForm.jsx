import { useState } from "react";
import api from "../services/api";
import bgImage from "../assets/bg.avif";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contact", formData);
    
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: ""
      });
    } catch(error) {
      alert("Error submitting form");
      console.error(error);
      
    }
  };

  return (
    <div
      id="contact"
      className="h-[60vh] bg-cover bg-center flex items-center justify-between px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-white max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg font-medium mb-2">
          For Any Queries
        </p>
        <p className="text-sm text-gray-200">
          Our experts are ready to help you.  
          Get free consultation and guidance today.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-violet-400/90 flex flex-col gap-4 p-6 rounded-lg shadow-lg w-87.5"
      >
        <h2 className="text-xl font-semibold text-center">
         Contact Us.
        </h2>

        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            className="p-2 rounded border-black border-2 mb-4"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            className="p-2 rounded border-black border-2 mb-4"
          />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Your Mobile Number"
            required
            className="p-2 rounded border-black border-2 mb-4"
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter Your City"
            required
            className="p-2 rounded border-black border-2 mb-1"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 rounded mt-2 hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
