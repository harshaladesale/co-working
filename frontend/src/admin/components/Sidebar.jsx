import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-4">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/contacts">Contacts</Link></li>
        <li><Link to="/admin/reviews">Reviews</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
