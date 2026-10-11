import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaCode, FaDatabase, FaJava, FaServer, FaToolbox } from 'react-icons/fa'
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact
} from 'react-icons/si'
import './Skills.css'

gsap.registerPlugin(useGSAP)

const floatingTechnologies = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Java', icon: FaJava },
  { name: 'MySQL', icon: SiMysql },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'CI/CD', icon: SiGithubactions }
]

const skillGroups = [
  {
    title: 'Frontend Development',
    subtitle: 'Building responsive, accessible, and high-performance user interfaces.',
    icon: FaCode,
    accent: 'border-yellow-500/30 bg-yellow-400/5 text-yellow-400',
    items: [
      { name: 'React', type: 'CORE' },
      { name: 'JavaScript (ES6+)', type: 'CORE' },
      { name: 'Tailwind CSS', type: 'CORE' },
      { name: 'HTML5 & Modern CSS', type: 'CORE' },
      { name: 'Vite', type: 'TOOLING' },
      { name: 'GSAP Animations', type: 'INTERACTIVE' },
      { name: 'Responsive UI/UX', type: 'DESIGN' }
    ],
    total: '01',
    totalOutOf: '04'
  },
  {
    title: 'Backend Development',
    subtitle: 'Architecting secure, modular, and maintainable server-side logic.',
    icon: FaServer,
    accent: 'border-yellow-500/30 bg-yellow-400/5 text-yellow-400',
    items: [
      { name: 'Java', type: 'CORE' },
      { name: 'Spring Boot', type: 'FRAMEWORK' },
      { name: 'Node.js', type: 'RUNTIME' },
      { name: 'Express.js', type: 'FRAMEWORK' },
      { name: 'RESTful API Architecture', type: 'STANDARD' },
      { name: 'JWT & Session Auth', type: 'SECURITY' },
      { name: 'Microservices Fundamentals', type: 'CONCEPT' }
    ],
    total: '02',
    totalOutOf: '04'
  },
  {
    title: 'Databases',
    subtitle: 'Structuring relational and document data for query efficiency.',
    icon: FaDatabase,
    accent: 'border-yellow-500/30 bg-yellow-400/5 text-yellow-400',
    items: [
      { name: 'MongoDB', type: 'NOSQL' },
      { name: 'MySQL', type: 'RELATIONAL' },
      { name: 'PostgreSQL', type: 'RELATIONAL' },
      { name: 'Mongoose ODM', type: 'DRIVER' },
      { name: 'Hibernate / JPA', type: 'ORM' },
      { name: 'Database Indexing', type: 'OPTIMIZATION' }
    ],
    total: '03',
    totalOutOf: '04'
  },
  {
    title: 'Tools & DevOps',
    subtitle: 'Ensuring smooth development workflows and reliable deployment.',
    icon: FaToolbox,
    accent: 'border-yellow-500/30 bg-yellow-400/5 text-yellow-400',
    items: [
      { name: 'Git & GitHub', type: 'VCS' },
      { name: 'Postman', type: 'API TESTING' },
      { name: 'Docker', type: 'CONTAINERS' },
      { name: 'Linux / Shell', type: 'CLI' },
      { name: 'VS Code & IntelliJ IDEA', type: 'IDE' },
      { name: 'npm / Yarn', type: 'PACKAGE MGR' }
    ],
    total: '04',
    totalOutOf: '04'
  }
]

function Skills() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const motion = gsap.matchMedia()

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.skills-heading, .skills-description, .skill-card',
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'all'
          }
        )

        gsap.fromTo(
          '.floating-tech',
          { autoAlpha: 0, scale: 0.7 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.07,
            ease: 'back.out(1.7)',
            clearProps: 'opacity,visibility,scale'
          }
        )

        gsap.utils.toArray('.floating-tech').forEach((icon, index) => {
          gsap.to(icon, {
            y: index % 2 === 0 ? -10 : 10,
            rotation: index % 2 === 0 ? 3 : -3,
            duration: 2.4 + (index % 4) * 0.35,
            delay: index * 0.1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          })
        })

        gsap.to('.skills-glow', {
          opacity: 0.85,
          scale: 1.12,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })

      })

      return () => motion.revert()
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="skills-page relative  overflow-hidden px-4 pb-10 pt-8 text-[var(--text-color)] sm:px-6 lg:px-10"
    >
      <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-[4rem] px-18">
          Skills
        </h2>
      {/* <div className="skills-glow pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-yellow-400/10 blur-[100px]" /> */}

      <main className="relative z-5 flex justify-center items-center mx-auto mt-8 max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-5">
          <div className="floating-tech-cloud mx-auto flex min-h-48 w-full max-w-5xl flex-wrap items-center justify-center gap-3 py-5 sm:gap-5">
            {floatingTechnologies.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="floating-tech flex items-center gap-2 rounded-xl border border-yellow-300/15 bg-[#222]/75 px-3 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-4 sm:py-3 sm:text-sm"
                aria-hidden="true"
              >
                <Icon className="text-lg text-[#f0c74e] sm:text-xl" />
                <span>{name}</span>
              </div>
            ))}
          </div>

          </div>
      </main>
    </div>
  )
}

export default Skills
