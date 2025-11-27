import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects.js";
import CategoryFilter from "./CategoryFilter";
import ProjectCards from "./ProjectCards.jsx";

export default function ProjectsSection() {
    const [category, setCategory] = useState("All");

    const sorted = [...projects].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const filtered =
        category === "All"
            ? sorted
            : sorted.filter((p) => p.category === category);

    const latestSix = filtered.slice(0, 6);

    return (
        <section
            id="projects"
            className="min-h-screen flex justify-center items-center px-6 py-40 bg-slate-50"
        >
            <div className="max-w-5xl w-full text-center">
                <h2 className="text-4xl font-bold mb-10 pb-6 text-slate-900">Latest Projects</h2>

                <CategoryFilter category={category} setCategory={setCategory} />

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 pb-6">
                    {latestSix.map((p) => (
                        <ProjectCards title={p.title} description={p.description} projectId={p.id} imageUrl={p.imageUrl}/>
                    ))}
                </div>

                <Link
                    to="/projects"
                    className="inline-block mt-10 px-6 py-3 rounded-full bg-violet-600 text-white hover:bg-fuchsia-600 border border-violet-900 hover:border-fuchsia-900 transition-colors duration-300"
                >
                    View All Projects →
                </Link>
            </div>
        </section>
    );
}
