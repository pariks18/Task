import { useEffect, useState } from "react";
import api from "../services/api";

const ViewSubscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get("/newsletter").then((res) => setSubs(res.data));
  }, []);

  return (
    <section className="pb-20 flex justify-center">
      <div className="w-full max-w-2xl ">

        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center relative 
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-blue-500
         after:transition-all after:duration-300
         hover:after:w-full">
          Newsletter Subscribers
        </h3>


        <div className="bg-white shadow overflow-hidden border border-black">
          <table className="w-full text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-4 text-left font-medium">
                  Email Address
                </th>
              </tr>
            </thead>

            <tbody>
              {subs.map((s, index) => (
                <tr
                  key={s._id}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4">
                    {s.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

 
        {subs.length === 0 && (
          <p className="text-gray-500 text-base mt-6 text-center">
            No newsletter subscribers yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default ViewSubscribers;
