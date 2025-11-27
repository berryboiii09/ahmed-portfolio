import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (id) => {
        if (location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="fixed top-5 max-md:min-w-11/12 min-w-4/5 rounded-full backdrop-blur-2xl md:pl-16 pl-10 md:pr-16 bg-white/20 border border-gray-200 z-10 shadow-xl/5 flex justify-between items-center p-4">

                <div id="logo" className="text-2xl cursor-pointer hover:scale-110 transition-all duration-300" onClick={() => handleNavigation("hero")}>Ahmed H. S.</div>

                <ul className="hidden list-none md:flex justify-evenly gap-8">
                    <li className="nav-link text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => handleNavigation("about")}>About</li>
                    <li className="nav-link text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => handleNavigation("skills")}>Skills</li>
                    <li className="nav-link text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => handleNavigation("projects")}>Projects</li>
                    <li className="nav-link text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => handleNavigation("contact")}>Contact</li>
                </ul>
            </div>
        </div>
    );
}
