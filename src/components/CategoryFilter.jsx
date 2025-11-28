export default function CategoryFilter({ category, setCategory }) {
    return (
        <div className="flex gap-2 md:gap-4 justify-center">
            {["All", "Frontend Development", "3D Game Development"].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
                        category === cat
                            ? "bg-violet-600 text-white hover:bg-violet-900"
                            : "bg-white text-black border hover:bg-gray-300 border-gray-300 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}