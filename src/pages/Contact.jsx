import { useState } from 'react'
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaRegMessage
} from 'react-icons/fa6'

const emailAddress = 'piyushmore302@gmail.com'

const profiles = [
  {
    label: 'GitHub',
    href: 'https://github.com/piyushmore27',
    icon: FaGithub
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/piyushmore27/',
    icon: FaLinkedin
  }
]

function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopyStatus('Email copied to clipboard.')
    } catch {
      setCopyStatus('Could not copy automatically. Select the email address to copy it.')
    }
  }

  const sendMessage = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const senderEmail = formData.get('email')
    const subject = formData.get('subject') || `Portfolio inquiry from ${name}`
    const message = formData.get('message')
    const body = `Hi Piyush,\n\n${message}\n\nFrom: ${name}\nEmail: ${senderEmail}`

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="min-h-screen px-4 pb-16 pt-24 text-[var(--text-color)] sm:px-6 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-12 max-w-[600px]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.035] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#f0c74e]">
            <FaRegMessage aria-hidden="true" />
            <span>Get in touch</span>
          </div>
          <h1 className="max-w-[600px] text-[2rem] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[2.35rem]">
            Let&apos;s build something impactful together.
          </h1>
          <p className="mt-3 max-w-[470px] text-sm leading-5 text-[var(--text-color)] sm:text-sm">
            Whether you have an opportunity, a technical collaboration, or a question about my work, my inbox is always open.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:gap-9">
          <section className="rounded-[14px] border border-white/[0.07] bg-white/[0.025] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <h2 className="text-base font-bold tracking-tight text-white">Contact Information</h2>
            <p className="mt-1 text-xs leading-[1.5]">
              Feel free to reach out directly via email or connect across developer networks.
            </p>

            <div className="mt-7">
              <h3 className="mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white/60">Direct email</h3>
              <div className="flex min-w-0 items-center justify-between gap-2 rounded-[11px] border border-white/[0.07] bg-white/[0.035] p-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="min-w-0 break-all px-1 text-xs font-semibold text-[#f0c74e] hover:text-yellow-300"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  aria-label="Copy email address"
                >
                  {copyStatus.startsWith('Email copied') ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                </button>
              </div>
              <p className="sr-only" role="status" aria-live="polite">{copyStatus}</p>
            </div>

            <div className="my-6 border-t border-white/[0.07]" />

            <div>
              <h3 className="mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white/60">Online profiles</h3>
              <div className="space-y-2">
                {profiles.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[11px] border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-xs font-semibold text-white transition hover:border-yellow-300/20 hover:bg-white/[0.05]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="text-white/55" aria-hidden="true" />
                      {label}
                    </span>
                    <FaArrowUpRightFromSquare className="text-xs text-white/40" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[10px] leading-5 text-white/65">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Currently open to full-time, internship, and project roles</span>
            </div>
          </section>

          <section className="rounded-[14px] border border-white/[0.07] bg-white/[0.025] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <h2 className="text-base font-bold tracking-tight text-white">Send a Message</h2>
            <p className="mt-1 text-xs leading-[1.5]">
              Compose your message below. Sending opens your default email app with the message ready to send to{' '}
              <a href={`mailto:${emailAddress}`} className="font-mono text-[10px] text-[#f0c74e] hover:text-yellow-300">
                {emailAddress}
              </a>.
            </p>

            <form className="mt-5 space-y-4" onSubmit={sendMessage}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-white/65">
                    Your name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full rounded-[11px] border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-xs text-white outline-none transition placeholder:text-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-white/65">
                    Your email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@company.com"
                    required
                    className="w-full rounded-[11px] border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-xs text-white outline-none transition placeholder:text-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-white/65">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry / opportunity"
                  className="w-full rounded-[11px] border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-xs text-white outline-none transition placeholder:text-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-white/65">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Hi Piyush, I came across your portfolio and would love to discuss..."
                  required
                  className="w-full resize-y rounded-[11px] border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-xs leading-5 text-white outline-none transition placeholder:text-white/30 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                />
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-yellow-500/70 px-4 py-2 text-xs font-semibold text-[#f0c74e] transition hover:bg-yellow-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 sm:w-auto"
                >
                  Open in Email Client
                  <FaPaperPlane aria-hidden="true" />
                </button>
                <p className="text-[10px] leading-5 text-white/55">* No personal data is stored on third-party servers.</p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Contact
