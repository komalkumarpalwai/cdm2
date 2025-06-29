export default function BlogSearch({ search, setSearch }) {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or tag..."
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
