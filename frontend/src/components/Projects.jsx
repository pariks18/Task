import { useEffect, useState } from "react";
import api from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-24 bg-slate-50 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-3">
          Our Projects
        </h2>

        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-14">
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="w-64 bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 text-left">
                <h3 className="text-sm font-semibold text-blue-600 mb-2">
                  {project.name}
                </h3>

                <p className="text-xs text-gray-500 mb-4">
                  {project.description}
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
