import { useEffect, useState } from "react";
import api from "../services/api";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contact").then((res) => setContacts(res.data));
  }, []);

  return (
    <section className="mb-20 flex justify-center">
      <div className="w-full max-w-4xl">
       
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center relative
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-blue-500
         after:transition-all after:duration-300
         hover:after:w-full">
          Contact Form Submissions
        </h3>

       
        <div className="bg-white overflow-x-auto border border-black">
          <table className="min-w-full text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Name</th>
                <th className="px-6 py-4 text-left font-medium">Email</th>
                <th className="px-6 py-4 text-left font-medium">Mobile</th>
                <th className="px-6 py-4 text-left font-medium">City</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((c, index) => (
                <tr
                  key={c._id}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4">{c.name}</td>
                  <td className="px-6 py-4">{c.email}</td>
                  <td className="px-6 py-4">{c.mobile}</td>
                  <td className="px-6 py-4">{c.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {contacts.length === 0 && (
          <p className="text-gray-500 text-base mt-6 text-center">
            No contact submissions yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default ViewContacts;
