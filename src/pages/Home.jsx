import React from 'react'
import img from '../assets/piyush2.png'
import Button from '../components/Button'
import Project from './Projects.jsx'
import Education from './Education.jsx'
import Contact from './Contact.jsx'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Skills from './Skills.jsx'

function Home() {
    const handleProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
        })
    }
    const handleConnect = () => {
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <>
            <section id="home" className="home relative min-h-screen overflow-hidden shadow-lg">
                <div className="skills-glow pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-yellow-400/10 blur-[100px]" />
                <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4  sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 xl:px-10">
                    <div className="left order-2 py-20 flex w-full max-w-2xl items-start gap-4 pt-8 sm:gap-6 lg:order-1 lg:mt-0 lg:pt-0">
                        <div className="line hidden h-28 w-1 rounded-full bg-[var(--text-color)] sm:block lg:h-40"></div>

                        <div className="content flex w-full flex-col gap-5 sm:gap-6">
                            <p className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-[5rem] text-shadow-2xl">
                                Piyush More
                            </p>

                            <div className="subheading text-md text-[var(--text-color)] sm:text-2xl ">
                                <p>MERN FullStack Developer</p>
                            </div>

                            <div className="bio max-w-xl text-base font-semibold text-[var(--text-color)] sm:text-xl lg:text-2xl">
                                Passionate full-stack developer specializing in building resilient, scalable web applications with MERN Stack.
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <Button title={'Connect'} onClick={handleConnect} />
                                <a
                                    href="/Piyush_Resume.pdf"
                                    download="Piyush-More-Resume.pdf"
                                    className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-neutral-600 px-4 py-4 font-semibold text-neutral-600 transition-colors shadow-sm shadow-white hover:transition hover:translate-y-0.5 hover:shadow-none"
                                >
                                    Download Resume
                                </a>
                            </div>

                            <div className="socialMedia  flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
                                <p className="text-base text-white sm:text-xl">Follow -</p>

                                <div className="icons flex items-center gap-3 sm:gap-4">
                                    <a
                                        href="https://github.com/piyushmore27"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-600 transition "
                                    >
                                        <FaGithub size={20} className="text-neutral-600 " />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/piyushmore27/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-600 transition "
                                    >
                                        <FaLinkedin size={20} className="text-neutral-600 " />
                                    </a>

                                    <a
                                        href="mailto:piyushmore302@gmail.com"
                                        aria-label="Send Email"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-600 transition"
                                    >
                                        <SiGmail size={20} className="text-neutral-600 " />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right hidden order-1 w-full justify-center pb-0 md:flex lg:order-2 lg:w-[38%] lg:justify-end lg:pb-0">
                        <img
                            src={img}
                            alt="Piyush More"
                            className="w-full max-w-[22rem] grayscale sm:max-w-[25rem] lg:max-w-[30rem]"
                        />
                    </div>
                </div>

                <div
                    className="scroll-indicator absolute bottom-4 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-[var(--text-color)]"
                    onClick={handleProjects}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#d6d6d6"
                        className="animate-scroll-bounce"
                    >
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                    </svg>
                </div>
            </section>

            <section id="projects" className="projects min-h-screen">
                <Project />
            </section>
            <section id="skills" className="skills ">
                <Skills/>
            </section>

            <section id="education" className="educations min-h-screen">
                <Education />
            </section>

            <section id="contact" className="contact min-h-screen">
                <Contact />
            </section>
        </>
    )
}

export default Home
