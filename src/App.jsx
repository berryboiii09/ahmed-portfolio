import {Routes,Route} from "react-router-dom";
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import AllProjects from "./pages/AllProjects.jsx";
import SkillCard from "./components/SkillCard.jsx";
import { FaHtml5, FaBootstrap, FaReact ,FaUnity, FaHashtag, FaFigma, FaGit, FaNetworkWired, FaChartArea,
    FaPython, FaBrain, FaBuilding, FaTools, FaGamepad, FaPaintBrush,FaLinkedin, FaGithub,
    FaItchIo, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCinema4D, SiBlender, SiAdobephotoshop } from "react-icons/si";
import { MdOutlineSecurity, MdMiscellaneousServices } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { PiOfficeChair } from "react-icons/pi";
import './App.css'

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element={
            <div>
                <Section id="hero" title="" bgcolor="white" textcolor="#7c3aed">
                    <div className="flex items-center justify-center gap-6 md:gap-12">

                        {/* Left text */}
                        <div className="text-5xl md:text-9xl pr-70 pb-40 font-extrabold text-purple-600 text-nowrap">
                            Ahmed
                        </div>

                        {/* Center image */}
                        <img
                            src="/img/Me.png"
                            alt="Me"
                            className="absolute max-h-screen pt-15"
                        />

                        {/* Right text */}
                        <div className="text-5xl md:text-8xl font-extrabold text-blue-600 text-nowrap">
                            H.S.
                        </div>

                    </div>

                </Section>

                <Section id="about" title="Who am i ?" bgcolor="#f8fafc" textcolor="#0f172a" maxWidth="1000px">
                    <div className="text-justify pt-6 text-slate-600">I'm a Computer and Control Engineer with a
                        strong foundation in software development and a passion for creating engaging digital experiences.
                        Skilled in Unity game development, designing interactive gameplay and optimizing performance.
                        Proficient in frontend development using HTML, CSS, and JavaScript to build responsive, user-friendly interfaces.
                        Experienced in software testing to ensure quality, reliability, and seamless user experiences. Combines technical
                        expertise and creativity to deliver polished applications across gaming and web platforms.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-20 md:gap-80">
                        <div>
                            <div className="text-4xl font-bold mb-6 flex justify-center items-center gap-5"><GiGraduateCap/>Education</div>
                            <div className="text-2xl font-semibold pt-6">Shorouk Academy</div>
                            <div className="text-lg text-slate-600">Computer and Control Engineering</div>
                            <div className="text-lg text-slate-600">Bachelor's Degree</div>
                            <div className="text-lg text-slate-600">2020 - 2025</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-6 flex justify-center items-center gap-5"><PiOfficeChair/>Experiences</div>
                            <div className="text-2xl font-semibold pt-6">Elevvo Pathways</div>
                            <div className="text-lg text-slate-600">Frontend Developer Intern</div>
                            <div className="text-lg text-slate-600">October 2025 - November 2025</div>
                        </div>
                    </div>
                </Section>

                <Section id="skills" title="My Skills" textcolor="#0f172a" maxWidth="1000px" bgcolor="white">
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-50 gap-y-10">
                        <div>
                            <div className="text-3xl font-bold mb-4 text-nowrap text-cyan-700 pb-4 flex justify-center items-center gap-5"><FaTools/> Frontend Development</div>
                            <SkillCard icon={<FaHtml5/>} title="HTML & CSS"/>
                            <SkillCard icon={<IoLogoJavascript/>} title="JavaScript"/>
                            <SkillCard icon={<FaBootstrap/>} title="Bootstrap 5"/>
                            <SkillCard icon={<RiTailwindCssFill/>} title="Tailwind CSS v4"/>
                            <SkillCard icon={<FaReact/>} title="React.js"/>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-4 text-nowrap text-violet-700 pb-4 flex justify-center items-center gap-5"><FaGamepad/>3D Game Development</div>
                            <SkillCard icon={<FaUnity/>} title="Unity Engine"/>
                            <SkillCard icon={<FaHashtag/>} title="C# Programming"/>
                            <SkillCard icon={<SiBlender/>} title="Blender"/>
                            <SkillCard icon={<SiCinema4D/>} title="Cinema 4D"/>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-4 text-nowrap text-fuchsia-700 pb-4 flex justify-center items-center gap-5"><FaPaintBrush/>Design Tools</div>
                            <SkillCard icon={<SiAdobephotoshop/>} title="Adobe Photoshop"/>
                            <SkillCard icon={<FaFigma/>} title="Figma"/>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-4 text-nowrap text-slate-700 pb-4 flex justify-center items-center gap-5"><MdMiscellaneousServices/>Other Skills</div>
                            <SkillCard icon={<FaGit/>} title="Git"/>
                            <SkillCard icon={<MdOutlineSecurity/>} title="Cyber Security"/>
                            <SkillCard icon={<FaNetworkWired/>} title="Networks"/>
                            <SkillCard icon={<FaChartArea/>} title="MATLAB"/>
                            <SkillCard icon={<FaPython/>} title="Python"/>
                            <SkillCard icon={<FaBrain/>} title="Machine Learning"/>
                            <SkillCard icon={<FaBuilding/>} title="Building Management Systems"/>
                        </div>
                    </div>
                </Section>

                <ProjectsSection/>

                <Section id="contact" title="Contact Me" maxWidth="1000px" bgcolor="white" textcolor="#0f172a">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                        <div>
                            <div className="text-3xl font-bold">E-mail</div>
                            <div className="text-lg pt-4 text-slate-600">ahmedhst2001@gmail.com</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">Social Media</div>
                            <a className="text-lg pt-4 text-slate-600 flex justify-center items-center gap-5" href="https://google.com"><FaLinkedin/>LinkedIn</a>
                            <a className="text-lg text-slate-600 flex justify-center items-center gap-5" href="https://google.com"><FaGithub/>GitHub</a>
                            <a className="text-lg text-slate-600 flex justify-center items-center gap-5" href="https://google.com"><FaItchIo/>Itch.io</a>
                            <a className="text-lg text-slate-600 flex justify-center items-center gap-5" href="https://google.com"><FaInstagram/>Instagram</a>
                            <a className="text-lg text-slate-600 flex justify-center items-center gap-5" href="https://google.com"><FaFacebookSquare/>Facebook</a>
                        </div>
                    </div>
                </Section>
                <div className="min-h-20 bg-slate-50 flex justify-center items-center">
                   <a href="https://github.com/berryboiii09" className="underline hover:text-blue-500 transition-colors duration-300">Built by Ahmed Hany S.</a>
                </div>
            </div>
                    }
                />
                <Route path="project/:id" element={<ProjectDetails/>}/>
                <Route path="/projects" element={<AllProjects/>}/>
            </Routes>
        </>
    )
}

export default App
