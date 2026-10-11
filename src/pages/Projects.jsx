import React, { useRef } from 'react'
import devNex from '../assets/devNex.png'
import ieee from '../assets/ieeeWebite.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "DevNex Code Editor",
    category: "Browser-Based IDE",
    description:
      "A browser-based development environment featuring Monaco Editor, AI-assisted coding, repository integration, and intelligent code review.",
    image: devNex,
    tech: ["React", "Node.js", "Monaco", "AI"],
    highlights: [
      "AI-assisted code completion and refactoring",
      "GitHub repository integration",
      "Code analysis and pull request review",
    ],
    github: "https://github.com/Piyushmore27/DevNex-CodeEditor",
    live: "#",
  },
  {
    title: "SUI-IEEE Student Branch Website",
  category: "Official Organization Website",
  description:
    "A modern and responsive website for the SUI-IEEE Student Branch at Sage University Indore, showcasing technical events, workshops, hackathons, student activities, and IEEE initiatives.",
  image: ieee,
  tech: ["React", "Tailwind CSS", "JavaScript", "GSAP"],
  highlights: [
    "Showcase of IEEE events, workshops, and hackathons",
    "Information about student branch chapters and initiatives",
    "Responsive interface for students and visitors",
  ],
  github: "https://github.com/Piyushmore27/SUI-IEEE",
  live: "https://suiieee.vercel.app/",
  },
  {
    title: "Wanderlust",
    category: "Travel & Booking Platform",
    description:
      "A full-stack accommodation booking platform where users can explore properties, view listings, and manage their travel experiences.",
    image: null,
    tech: ["HTML5", "CSS", "JavaScript", "ejs"],
    highlights: [
      "Property listings and detailed views",
      "User authentication and booking workflows",
      "Full-stack REST API integration",
    ],
    github: "https://github.com/your-username",
    live: "#",
  },
];

function Projects() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const slides = gsap.utils.toArray(".project-slide", track);

      if (!track || slides.length < 2) return;

      const getScrollDistance = () =>
        track.scrollWidth - document.documentElement.clientWidth;

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [projects.length],
      revertOnUpdate: true,
    }
  );



  const highlights = [
    'Custom multi-tab workspace with debounced syntax evaluation',
    'Inline AI code completion and automated diff patching',
    'Context-aware refactoring suggestions for rapid loop iteration'
  ]

  return (
    <div className="w-full min-h-screen  px-6 py-16 text-[var(-text-color)] sm:px-10 lg:px-14">
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            

            <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]">
              Featured Projects
            </h2>
          </div>


        </div>

        <div className=" max-w-3xl text-xl leading-9 text-neutral-400">
          Practical web applications demonstrating full-stack architecture, clean API design,
          and interactive frontend development.
        </div>

        <section
          id="projects"
          ref={containerRef}
          className="relative h-screen overflow-hidden text-white "
        >
         

          {/* Horizontal track */}
          <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden">
            <div
              ref={trackRef}
              className="flex h-full w-max"
            >
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="project-slide flex h-full w-screen shrink-0 items-center px-6 pb-8 sm:px-10 lg:px-14"
                >
                  <div className="mx-auto grid w-full max-w-8xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">

                    {/* Project image */}
                    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#191b20] shadow-2xl">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex aspect-video items-center justify-center">
                          <span className="text-2xl font-bold text-neutral-500">
                            {project.title}
                          </span>
                        </div>
                      )}

                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white">
                        Project 0{index + 1}
                      </span>
                    </div>

                    {/* Project details */}
                    <div className="flex flex-col">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#f0c74e]">
                        {project.category}
                      </p>

                      <h3 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      <p className="max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                          >
                            <span className="text-[#f0c74e]">↗</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Links */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-[#f0c74e] hover:text-[#f0c74e]"
                        >
                          GitHub ↗
                        </a>

                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-[#f0c74e] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white"
                          >
                            Live Demo ↗
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="pointer-events-none absolute bottom-3 right-6 z-20 hidden items-center gap-2 text-xs text-neutral-500 sm:flex">
            SCROLL TO EXPLORE
            <span className="text-[#f0c74e]">→</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
