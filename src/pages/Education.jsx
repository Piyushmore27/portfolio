import React from 'react'
import { FaGraduationCap, FaBookOpen, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const education = {
  degree: 'B.Tech in Computer Science &',
  degreeLine: 'Engineering',
  university: 'Sage University Indore',
  years: '2023 - 2027',
  location: 'Indore,Madhya Pardesh',
  coursework: [
    'Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, Computer Networks, Operating Systems, Software Engineering.',
    'Active participant in technical club initiatives, coding challenges, and collaborative departmental hackathons.'
  ],
  gpa: '8.03'
}

function Education() {
  return (
    <div className="min-h-screen bg-transparent px-6 py-5 text-[var(--text-color)] sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[rgba(234,178,8,0.45)] bg-[rgba(234,178,8,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0c74e] shadow-[0_0_0_1px_rgba(234,178,8,0.1)]">
          <FaGraduationCap className="text-[#f0c74e] text-xs" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-[4rem]">
          Education
        </h2>

        <p className="mb-5 max-w-5xl text-lg leading-9 text-[var(--text-color)] sm:text-[1rem]">
          Formal foundations in Computer Science principles, algorithms, and software engineering.
        </p>

        <div className="rounded-2xl border border-white/10  p-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:p-7 lg:p-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(234,178,8,0.14)] border border-[rgba(234,178,8,0.45)] text-[#f0c74e]">
                <FaGraduationCap className="text-xl" />
              </div>

              <div>
                <h2 className="text-3xl font-black leading-tight tracking-[-0.02em] text-white sm:text-2xl lg:text-[2rem]">
                  {education.degree}
                  <span className="block">{education.degreeLine}</span>
                </h2>
                <div className="mt-4 text-xl font-semibold tracking-[-0.04em] text-[#f0c74e]">
                  {education.university}
                </div>
              </div>
            </div>

            <div className="space-y-3 text-base text-[var(--text-color)] sm:text-lg">
              <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                <FaCalendarAlt className="text-[#f0c74e]" />
                <span>{education.years}</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                <FaMapMarkerAlt className="text-[#f0c74e]" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-7">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f0c74e]">
              <FaBookOpen className="text-sm" />
              <span>Key Coursework & Activities</span>
            </div>

            <ul className="space-y-4 text-lg leading-8 text-[var(--text-color)] sm:text-[1.15rem]">
              {education.coursework.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-3 inline-block h-2 w-2 rounded-full bg-[#f0c74e]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-base text-[var(--text-color)] sm:flex-row sm:items-center sm:justify-between sm:text-lg">
            <div className="text-[var(--text-color)]">
              Configurable in <span className="font-mono text-[#f0c74e]">src/data/portfolio.js</span>
            </div>
            <div className="text-right font-medium text-[var(--text-color)]">
              {education.gpa}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
