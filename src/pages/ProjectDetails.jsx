import {useParams, Link} from "react-router-dom";
import {FaGithub, FaItchIo} from "react-icons/fa";
import {AiOutlineGlobal} from "react-icons/ai";
import {projects} from "../data/projects.js";

export default function ProjectDetails() {
    const {id} = useParams();
    const project = projects.find((p) => p.id === Number(id));
    if (!project) return <h1>Not found</h1>;

    /* Buttons */
    const projectButtons = () => {
        if (project.category === "Frontend Development") {
            return (
                <div className="flex items-center gap-3">
                    <a className="bg-slate-700 hover:bg-slate-900 transition-colors duration-300 text-white px-6 py-3 rounded-full flex justify-center items-center gap-2"
                       href={project.github} target="_blank"><FaGithub/>GitHub</a>
                    <a className="bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white px-6 py-3 rounded-full flex justify-center items-center gap-2"
                       href={project.liveDemo} target="_blank"><AiOutlineGlobal/>Live Demo</a>
                </div>
            )
        } else if (project.category === "3D Game Development") {
            return (
                <div className="flex items-center gap-3">
                    <a className="bg-red-500 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-3 rounded-full flex justify-center items-center gap-2"
                       href={project.liveDemo} target="_blank"><FaItchIo/>Check on Itch.io</a>
                </div>
            )
        } else {
            return null;
        }

    }

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center px-6 py-30 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-3xl w-full">
                <div className="pb-4 flex justify-center items-center">
                    <Link to="/" className="text-blue-500 underline hover:text-blue-700">← Back to home</Link>
                </div>
                <img src={project.imageUrl} alt={project.title}
                     className="w-full mb-4 rounded-xl border border-slate-900 dark:border-slate-300"/>
                <h1 className="text-4xl font-bold mb-4 pt-6 pb-2 dark:text-white transition-colors duration-300">{project.title}</h1>
                <p className="text-lg mb-6 pt-2 pb-4 dark:text-slate-400 transition-colors duration-300">{project.details}</p>
                <p className="text-2xl font-bold mb-6 pt-2 dark:text-white transition-colors duration-300">Project
                    Features</p>
                <p className="text-lg mb-6 pt-2 whitespace-pre-line size leading-10 pb-4 dark:text-slate-400 transition-colors duration-300">{project.features}</p>
                <p className="text-2xl font-bold mb-6 pt-2 dark:text-white transition-colors duration-300">Tech
                    Stack</p>
                <p className="text-lg mb-6 pt-2 pb-6 dark:text-slate-400 transition-colors duration-300">{project.stack}</p>
                {projectButtons()}
            </div>
        </div>
    );
}
