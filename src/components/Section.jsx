import React, { useEffect, useRef, useState } from "react";

export default function Section({
                                    id,
                                    title,
                                    children,
                                    bgcolor = "bg-white",
                                    textcolor = "text-slate-900",
                                    maxWidth = "700px",
                                }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.25 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`min-h-screen flex justify-center items-center px-10 py-40 transition-colors duration-300 ${bgcolor} ${textcolor}`}
        >
            <div
                style={{ maxWidth }}
                className={`w-full text-center animate-fade-up ${visible ? "show" : ""}`}
            >
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
                {children}
            </div>
        </section>
    );
}
