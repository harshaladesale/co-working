import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/enquiry`);
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Message</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((item) => (
              <tr key={item._id} className="border">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.phone}</td>
                <td className="p-2">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
