import { Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "msbecker@iastate.edu",
    href: "mailto:msbecker@iastate.edu",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MichaelBecker28",
    href: "https://github.com/MichaelBecker28",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "michael-s-becker",
    href: "https://linkedin.com/in/michael-s-becker",
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Contact</h1>
          <div className="h-px w-16 bg-white/20" />
          <p className="text-white/40 text-sm mt-6 max-w-lg leading-relaxed">
            I&apos;m actively looking for full-time roles in cybersecurity starting 2025.
            Feel free to reach out for opportunities, collaborations, or questions.
          </p>
        </div>

        {/* Contact links */}
        <div className="space-y-px mb-16">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-8 py-6 hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300 group"
            >
              <div className="flex items-center gap-5">
                <Icon size={18} className="text-white/30 group-hover:text-white/60 transition-colors" />
                <div>
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-1">{label}</p>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors">{value}</p>
                </div>
              </div>
              <span className="text-white/20 group-hover:text-white/50 transition-colors text-sm">↗</span>
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Document</p>
            <h3 className="text-white font-light text-xl">Resume / CV</h3>
            <p className="text-white/40 text-sm mt-1">Full academic and professional history</p>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-xs tracking-widest uppercase border border-white/20 px-6 py-3 text-white/50 hover:text-white hover:border-white/50 transition-colors text-center flex-shrink-0"
          >
            View PDF ↗
          </a>
        </div>

      </div>
    </main>
  )
}
