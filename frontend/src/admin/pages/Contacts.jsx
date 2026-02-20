import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

useEffect(() => {
  axios.get("http://127.0.0.1:5000/api/enquiry")
    .then((res) => {
      console.log("API RESPONSE 👉", res.data); // 👈 ADD THIS
      setContacts(res.data);
    })
    .catch((err) => console.log("API ERROR 👉", err));
}, []);


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Contact Messages</h2>

          <table className="w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(c => (
                <tr key={c._id} className="border-b">
                  <td className="p-2">{c.name}</td>
                  <td>{c.mobile}</td>
                  <td>{c.email}</td>
                  <td>{c.message}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Contacts;
