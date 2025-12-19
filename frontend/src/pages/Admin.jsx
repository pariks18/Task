import AddProject from "../admin/AddProject";
import AddClient from "../admin/AddClient";
import ViewContacts from "../admin/ViewContacts";
import ViewSubscribers from "../admin/ViewSubscribers";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
   <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center py-10">

        <div className="flex justify-between items-center mx-40 pt-5">
     <h1 className="text-2xl w-50 font-semibold text-gray-800 text-center bg-gray-100 py-6  mb-10 hover:bg-blue-200 transition-colors duration-300">
  Admin Panel
</h1>
<Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium transition">
    Back to Home    </Link>
</div>



      <AddProject />
      <AddClient />
      <ViewContacts />
      <ViewSubscribers />
    </div>
  );
};

export default Admin;
