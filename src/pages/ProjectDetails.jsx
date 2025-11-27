import { useParams, Link } from "react-router-dom";
import { FaGithub, FaItchIo } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { projects } from "../data/projects.js";

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));
    if (!project) return <h1>Not found</h1>;

    const projectButtons = () => {
        if (project.category === "Frontend Development") {
            return(
            <div className="flex items-center gap-4">
                <a className="bg-slate-800 text-white px-8 py-4 rounded-2xl flex justify-center items-center gap-4" href={project.github} target="_blank"><FaGithub/>GitHub</a>
                <a className="bg-blue-600 text-white px-8 py-4 rounded-2xl flex justify-center items-center gap-4" href={project.liveDemo} target="_blank"><AiOutlineGlobal/>Live Demo</a>
            </div>
            )
        }else if (project.category === "3D Game Development"){
            return (
                <div className="flex items-center gap-4">
                    <a className="bg-red-500 text-white px-8 py-4 rounded-2xl flex justify-center items-center gap-4" href={project.liveDemo} target="_blank"><FaItchIo/>Check on Itch.io</a>
                </div>
            )
        }else{
            return null;
        }

    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 py-30">
            <div className="max-w-2xl w-full">
                <div className="pb-4">
                    <Link to="/" className="text-blue-500 underline hover:text-blue-700">← Back to home</Link>
                </div>
                <img src={project.imageUrl} alt={project.title} className="w-full mb-4 rounded-xl border border-slate-300"/>
                <h1 className="text-4xl font-bold mb-4 pt-6">{project.title}</h1>
                <p className="text-lg mb-6 pt-2">{project.details}</p>
                <p className="text-lg mb-6 pt-2 pb-6">Tech Stack: {project.stack}</p>
                {projectButtons()}
            </div>
        </div>
    );
}
