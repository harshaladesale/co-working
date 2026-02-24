import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

const Reviews = () => {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    comment: "",
  });

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${import.meta.env.VITE_BASE_URL}/api/reviews`, form);

    alert("Review Added");
    setForm({ name: "", rating: "", comment: "" });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Add Review</h2>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input
              name="name"
              className="w-full border p-2"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              className="w-full border p-2"
              placeholder="Rating (1-5)"
              value={form.rating}
              onChange={handleChange}
            />

            <textarea
              name="comment"
              className="w-full border p-2"
              placeholder="Comment"
              value={form.comment}
              onChange={handleChange}
            />

            <button className="bg-black text-white px-4 py-2 rounded">
              Add Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
