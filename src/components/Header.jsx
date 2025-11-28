import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkButton from "./DarkButton";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (id) => {
        setOpen(false);

        if (location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div
                className={`fixed top-5 max-md:min-w-11/12 min-w-4/5 rounded-4xl backdrop-blur-2xl dark:bg-slate-900/60 bg-white/20 border 
                border-gray-200 dark:border-gray-800 shadow-xl/5 z-10 flex flex-col md:flex-row justify-between transition-all duration-300 overflow-hidden 
                ${open ? "py-6" : "py-4"}`}>

                <div className="flex justify-between items-center w-full px-10 md:px-16">

                    <div
                        id="logo"
                        className="text-2xl cursor-pointer hover:scale-110 transition-all duration-300 dark:text-white"
                        onClick={() => handleNavigation("hero")}
                    >
                        Ahmed H. S.
                    </div>
                    <div className="flex gap-8 text-black dark:text-white">
                    <DarkButton/>
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <ul className="hidden md:flex gap-8">
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300" onClick={() => handleNavigation("about")}>About</li>
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300" onClick={() => handleNavigation("skills")}>Skills</li>
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300" onClick={() => handleNavigation("projects")}>Projects</li>
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300" onClick={() => handleNavigation("contact")}>Contact</li>
                    </ul>
                </div>
                </div>

                {/* Mobile Dropdown*/}
                <div
                    className={`
                        md:hidden flex flex-col gap-4
                        transition-all duration-300 
                        ${open ? "mt-6 opacity-100 pl-10 pt-4" : "max-h-0 opacity-0"}
                    `}
                >
                    <li className="list-none cursor-pointer dark:text-white hover:text-blue-500" onClick={() => handleNavigation("about")}>About</li>
                    <li className="list-none cursor-pointer dark:text-white hover:text-blue-500" onClick={() => handleNavigation("skills")}>Skills</li>
                    <li className="list-none cursor-pointer dark:text-white hover:text-blue-500" onClick={() => handleNavigation("projects")}>Projects</li>
                    <li className="list-none cursor-pointer dark:text-white hover:text-blue-500" onClick={() => handleNavigation("contact")}>Contact</li>
                </div>
            </div>
        </div>
    );
}
