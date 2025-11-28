import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="/projects" element={<AllProjects />} />
            </Routes>
            <Footer/>
        </>
    );
}
