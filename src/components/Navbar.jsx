import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  
 const handleHome = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleEducation = () => {
    document.getElementById("education")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSkills = () => {
    document.getElementById("skills")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className='z-10 w-full fixed bg-linear-to-r from-[#1d1d1d] via-[#2d2d2d] to-[#1d1d1d] border border-neutral-800'>
      <div className="navbar text-[var(--text-color)] flex justify-between px-4 py-4 ">
        <div className="left cursor-pointer" onClick={handleHome}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
        </div>
        <div className="center w-xl flex justify-evenly">
          <p onClick={handleProjects} className="relative inline-block cursor-pointer after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--text-color-hover)] after:origin-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.65,0,0.35,1)] hover:after:scale-x-100 hover:text-[var(--text-color-hover)]">Projects</p>
          <p onClick={handleEducation} className="relative inline-block cursor-pointer after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--text-color-hover)] after:origin-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.65,0,0.35,1)] hover:after:scale-x-100 hover:text-[var(--text-color-hover)]">Education</p>
          <p onClick={handleSkills} className="relative inline-block cursor-pointer after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--text-color-hover)] after:origin-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.65,0,0.35,1)] hover:after:scale-x-100 hover:text-[var(--text-color-hover)]">Skills</p>
          <p onClick={handleContact} className="relative inline-block cursor-pointer after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--text-color-hover)] after:origin-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.65,0,0.35,1)] hover:after:scale-x-100 hover:text-[var(--text-color-hover)]">Contact</p>
        </div>
        <div className="right">
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
