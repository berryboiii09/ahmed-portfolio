export default function CategoryFilter({ category, setCategory }) {
    return (
        <div className="flex gap-2 md:gap-4 justify-center">
            {["All", "Frontend Development", "3D Game Development"].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full transition-colors duration-300 border cursor-pointer ${
                        category === cat
                            ? "bg-violet-600 text-white hover:bg-fuchsia-600 border-violet-900 hover:border-fuchsia-900"
                            : "bg-white text-black hover:bg-gray-300 border-gray-300"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}