import {useState} from "react";
import {Link} from "react-router-dom";
import {projects} from "../data/projects.js";
import CategoryFilter from "../components/CategoryFilter";
import ProjectCards from "../components/ProjectCards.jsx";

export default function AllProjects() {
    const [category, setCategory] = useState("All");
    const [page, setPage] = useState(1);

    const sorted = [...projects].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const filtered =
        category === "All"
            ? sorted
            : sorted.filter((p) => p.category === category);

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    const start = (page - 1) * itemsPerPage;
    const currentItems = filtered.slice(start, start + itemsPerPage);

    return (
        <div className="min-h-screen flex justify-center items-center px-6 pt-40 pb-20 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-6xl w-full text-center">
                <div className="pb-4">
                    <Link
                        to="/"
                        className="text-blue-500 underline hover:text-blue-700"
                    >
                        ← Back to home
                    </Link>
                </div>
                <h2 className="text-4xl font-bold pb-6 dark:text-white transition-colors duration-300">My Projects</h2>

                <CategoryFilter category={category} setCategory={setCategory}/>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 pb-6">
                    {currentItems.map((p) => (
                        <ProjectCards title={p.title} description={p.description} projectId={p.id}
                                      imageUrl={p.imageUrl}/>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-violet-600 text-white enabled:hover:bg-violet-900  transition-colors duration-300 enabled:cursor-pointer rounded-full disabled:opacity-30"
                    >
                        Prev
                    </button>

                    <span className="px-4 py-2 dark:text-white transition-colors duration-300">
            Page {page} of {totalPages}
          </span>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 bg-violet-600 text-white enabled:hover:bg-violet-900  transition-colors duration-300 enabled:cursor-pointer rounded-full disabled:opacity-30"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
