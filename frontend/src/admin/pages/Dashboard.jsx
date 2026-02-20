import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold">Welcome Admin</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
