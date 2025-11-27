import {Link} from "react-router-dom";

export default function ProjectCards({title, description, projectId, imageUrl}) {
    return(
        <Link
            to={`/project/${projectId}`}
            key={projectId}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-xl/5 transition"
        >
            <img src={imageUrl} alt={title} className="w-full mb-4 rounded-xl border border-slate-300"/>
            <h3 className="text-xl font-semibold text-slate-900 pt-6">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
        </Link>
    )
}