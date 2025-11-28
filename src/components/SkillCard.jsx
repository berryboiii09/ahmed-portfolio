export default function SkillCard({title,icon}) {
    return (
        <div className="flex justify-center gap-5 items-center py-1">
            <div className="text-2xl">{icon}</div>
            <div className="text-lg">{title}</div>
        </div>
    )
}