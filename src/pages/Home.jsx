import Section from "../components/Section.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import SkillCard from "../components/SkillCard.jsx";

import {
    FaHtml5, FaBootstrap, FaReact, FaUnity, FaHashtag, FaFigma,
    FaGit, FaNetworkWired, FaChartArea, FaPython, FaBrain, FaBuilding,
    FaTools, FaGamepad, FaPaintBrush, FaLinkedin, FaGithub, FaItchIo,
    FaInstagram, FaDiscord
} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiCinema4D, SiBlender, SiAdobephotoshop} from "react-icons/si";
import {MdOutlineSecurity, MdMiscellaneousServices} from "react-icons/md";
import {GiGraduateCap} from "react-icons/gi";
import {PiOfficeChair} from "react-icons/pi";


export default function Home() {

    const handleNavigation = (id) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div>

            {/* Hero */}
            <Section id="hero" title="" bgcolor="bg-white dark:bg-slate-950" textcolor="text-slate-900 dark:text-white">
                <div className="flex max-md:flex-col justify-center items-center gap-6">
                    <img src="/img/Me2.png" alt="Me" className="rounded-full"/>
                    <div>
                        <div className="md:text-8xl text-5xl font-extrabold text-violet-600 text-nowrap">
                            Ahmed Hany S.
                        </div>
                        <div className="text-left md:text-2xl">
                            Frontend & Game Developer
                        </div>
                        <div className="flex justify-start items-center gap-2 pt-8">
                            <div
                                className="bg-violet-700 hover:bg-violet-900 transition-colors duration-300 cursor-pointer text-white px-6 py-3 rounded-full"
                                onClick={() => handleNavigation("about")}
                            >
                                About Me
                            </div>
                            <div
                                className="bg-violet-700 hover:bg-violet-900 transition-colors duration-300 cursor-pointer text-white px-6 py-3 rounded-full"
                                onClick={() => handleNavigation("projects")}
                            >
                                My Projects
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* About */}
            <Section
                id="about"
                title="Who am i ?"
                bgcolor="bg-slate-50 dark:bg-slate-900"
                textcolor="text-slate-900 dark:text-white"
                maxWidth="1000px"
            >
                <div className="text-justify pt-6 text-slate-600 dark:text-slate-400 text-lg">
                    My name is Ahmed Hany, I'm 24 years old and I live in Egypt.
                    I'm a Computer and Control Engineer with a strong foundation in software development and a passion
                    for creating engaging digital experiences. Skilled in Unity game development, designing interactive
                    gameplay and optimizing performance. Proficient in frontend development using HTML, CSS,
                    JavaScript, and React to build responsive, user-friendly interfaces.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10">
                    <div>
                        <div className="text-4xl font-bold mb-6 flex justify-center items-center gap-5">
                            <GiGraduateCap/>Education
                        </div>
                        <div className="text-2xl font-semibold pt-6">Shorouk Academy</div>
                        <div className="text-lg text-slate-600 dark:text-slate-400">Computer and Control Engineering</div>
                        <div className="text-lg text-slate-600 dark:text-slate-400">Bachelor's Degree</div>
                        <div className="text-lg text-slate-600 dark:text-slate-400">2020 - 2025</div>
                    </div>

                    <div>
                        <div className="text-4xl font-bold mb-6 flex justify-center items-center gap-5">
                            <PiOfficeChair/> Experiences
                        </div>
                        <div className="text-2xl font-semibold pt-6">Elevvo Pathways</div>
                        <div className="text-lg text-slate-600 dark:text-slate-400">Frontend Developer Intern</div>
                        <div className="text-lg text-slate-600 dark:text-slate-400">October 2025 - November 2025</div>
                    </div>
                </div>
            </Section>


            {/* Skills */}
            <Section id="skills" title="My Skills" textcolor="text-slate-900 dark:text-white" maxWidth="1000px" bgcolor="bg-white dark:bg-slate-950">
                <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-x-50 gap-y-10">

                    {/* Frontend */}
                    <div>
                        <div
                            className="text-3xl font-bold mb-4 text-nowrap text-cyan-700 pb-4 flex justify-center items-center gap-5">
                            <FaTools/> Frontend Development
                        </div>
                        <SkillCard icon={<FaHtml5/>} title="HTML & CSS"/>
                        <SkillCard icon={<IoLogoJavascript/>} title="JavaScript"/>
                        <SkillCard icon={<FaBootstrap/>} title="Bootstrap 5"/>
                        <SkillCard icon={<RiTailwindCssFill/>} title="Tailwind CSS v4"/>
                        <SkillCard icon={<FaReact/>} title="React.js"/>
                    </div>

                    {/* 3D Game Dev */}
                    <div>
                        <div
                            className="text-3xl font-bold mb-4 text-nowrap text-violet-700 pb-4 flex justify-center items-center gap-5">
                            <FaGamepad/> 3D Game Development
                        </div>
                        <SkillCard icon={<FaUnity/>} title="Unity Engine"/>
                        <SkillCard icon={<FaHashtag/>} title="C# Programming"/>
                        <SkillCard icon={<SiBlender/>} title="Blender"/>
                        <SkillCard icon={<SiCinema4D/>} title="Cinema 4D"/>
                    </div>

                    {/* Design Tools */}
                    <div>
                        <div
                            className="text-3xl font-bold mb-4 text-nowrap text-fuchsia-700 pb-4 flex justify-center items-center gap-5">
                            <FaPaintBrush/> Design Tools
                        </div>
                        <SkillCard icon={<SiAdobephotoshop/>} title="Adobe Photoshop"/>
                        <SkillCard icon={<FaFigma/>} title="Figma"/>
                    </div>

                    {/* Other Skills */}
                    <div>
                        <div
                            className="text-3xl font-bold mb-4 text-nowrap text-slate-700 dark:text-slate-400 pb-4 flex justify-center items-center gap-5">
                            <MdMiscellaneousServices/> Other Skills
                        </div>
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

            {/* Projects */}
            <ProjectsSection/>

            {/* Contact */}
            <Section id="contact" title="Contact Me" maxWidth="1000px" bgcolor="bg-white dark:bg-slate-950" textcolor="text-slate-900 dark:text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">

                    <div>
                        <div className="text-3xl font-bold">E-mail</div>
                        <div className="text-lg pt-4 text-slate-600 dark:text-slate-400">ahmedhst2001@gmail.com</div>
                    </div>

                    <div>
                        <div className="text-3xl font-bold">Social Media</div>
                        <a className="text-lg pt-4 text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-900 transition-colors duration-300 cursor-pointer flex justify-center items-center gap-5" href="https://www.linkedin.com/in/ahmedhanysaid2001/" target="_blank"><FaLinkedin/>LinkedIn</a>
                        <a className="text-lg text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-900 transition-colors duration-300 cursor-pointer flex justify-center items-center gap-5" href="https://github.com/berryboiii09" target="_blank"><FaGithub/>GitHub</a>
                        <a className="text-lg text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-900 transition-colors duration-300 cursor-pointer flex justify-center items-center gap-5" href="https://berryboiii.itch.io/" target="_blank"><FaItchIo/>Itch.io</a>
                        <a className="text-lg text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-900 transition-colors duration-300 cursor-pointer flex justify-center items-center gap-5" href="https://www.instagram.com/ahmedhny_/" target="_blank"><FaInstagram/>Instagram</a>
                        <a className="text-lg text-slate-600 dark:text-slate-400 dark:hover:text-slate-200 hover:text-slate-900 transition-colors duration-300 cursor-pointer flex justify-center items-center gap-5" onClick={()=>alert("Discord: berryboiii")}><FaDiscord/>Discord</a>
                    </div>

                </div>
            </Section>

        </div>
    );
}
