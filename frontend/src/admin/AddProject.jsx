import { useState } from "react";
import api from "../services/api";

const AddProject = () => {
  const [project, setProject] = useState({
    image: "",
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/projects", project);
    alert("Project added");
    setProject({ image: "", name: "", description: "" });
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
          Add Project
        </h3>

       
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow space-y-6 border border-black "
        >
          <div>
            <label className="block text-base text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={project.image}
              onChange={handleChange}
              className="w-full border  px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-base text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Consultation"
              value={project.name}
              onChange={handleChange}
              className="w-full border  px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-base text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Project terms & conditions"
              value={project.description}
              onChange={handleChange}
              className="w-full border  px-4 py-3 text-base resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white
                px-10 py-3  text-base font-medium transition"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
