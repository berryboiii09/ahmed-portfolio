import React from "react";

export default function Section({
                                    id,
                                    title,
                                    children,
                                    bgcolor,
                                    textcolor,
                                    maxWidth = "700px", // default
                                }) {
    return (
        <section
            id={id}
            className="min-h-screen flex justify-center items-center px-10 py-40 transition-colors duration-300"
            style={{
                backgroundColor: bgcolor,
                color: textcolor,
            }}
        >
            <div
                style={{
                    maxWidth: maxWidth,
                }}
                className="w-full text-center"
            >
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
                <p className="text-lg">{children}</p>
            </div>
        </section>
    );
}
