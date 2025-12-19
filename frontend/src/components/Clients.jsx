import { useEffect, useState } from "react";
import api from "../services/api";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/clients")
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="clients" className="py-24 bg-white relative">
      <div className="absolute top-16 left-24 w-3 h-3 bg-blue-500 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-12">
          Happy Clients
        </h2>

        <div className="flex flex-wrap justify-center gap-8 pt-20">
          {clients.map((client) => (
            <div
              key={client._id}
              className="w-64 bg-white shadow-md rounded-xl px-6 pt-10 pb-8 relative hover:shadow-lg transition"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 rounded-full bg-white p-1 shadow">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-4 mt-6">
                {client.description}
              </p>

              <h4 className="text-sm font-semibold text-blue-600">
                {client.name}
              </h4>

              <span className="text-xs text-gray-400">
                {client.designation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
