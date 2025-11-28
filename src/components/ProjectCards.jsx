import {Link} from "react-router-dom";

export default function ProjectCards({title, description, projectId, imageUrl}) {
    return(
        <Link
            to={`/project/${projectId}`}
            key={projectId}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border dark:hover:bg-slate-800 border-slate-300 dark:border-slate-700 transition-colors duration-300 hover:border-slate-900 dark:hover:border-slate-300 hover:shadow-xl/5"
        >
            <img src={imageUrl} alt={title} className="w-full mb-4 rounded-xl border dark:border-slate-700 transition-colors duration-300 border-slate-300"/>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300 pt-6">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 text-sm">{description}</p>
        </Link>
    )
}