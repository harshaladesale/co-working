import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SocialFloat from "./components/SocialFloat";

// admin pages
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Contacts from "./admin/pages/Contacts";
import Reviews from "./admin/pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SocialFloat/>} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
