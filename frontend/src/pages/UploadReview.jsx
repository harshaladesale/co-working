// pages/UploadReview.jsx
export default function UploadReview() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Review</h2>

      <form className="bg-white p-4 shadow rounded">
        <input
          type="text"
          placeholder="Review Title"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="file"
          className="w-full mb-3"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}
