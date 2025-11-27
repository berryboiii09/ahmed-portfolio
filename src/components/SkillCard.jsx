export default function SkillCard({title,icon}) {
    return (
        <div className="flex justify-center gap-5 items-center py-1">
            <div className="text-2xl">{icon}</div>
            <div>{title}</div>
        </div>
    )
}