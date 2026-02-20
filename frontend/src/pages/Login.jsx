// pages/Login.jsx
export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
