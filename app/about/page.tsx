import Image from "next/image"
import Link from "next/link"

const skills = [
  { category: "Security", items: ["Network Security", "Penetration Testing", "Threat Detection", "SIEM/SOC", "Vulnerability Assessment"] },
  { category: "Development", items: ["Python", "C/C++", "JavaScript", "React", "Linux/Bash"] },
  { category: "Tools", items: ["Wireshark", "Metasploit", "Nmap", "Docker", "Git"] },
]

export default function About() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Michael S Becker</h1>
          <div className="h-px w-16 bg-white/20" />
        </div>

        {/* Bio + Photo */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-5 text-white/60 text-[15px] leading-relaxed">
            <p>
              I&apos;m a Cybersecurity Engineering student at Iowa State University, graduating in 2025.
              My focus is on building secure systems and understanding how adversaries think — then
              using that knowledge defensively.
            </p>
            <p>
              I&apos;ve worked on projects ranging from AI-powered threat detection platforms to
              embedded robotics systems, always with an eye toward reliability, security, and
              clean engineering.
            </p>
            <p>
              Outside of coursework I enjoy CTF competitions, tinkering with hardware, and
              exploring the intersection of machine learning and cybersecurity.
            </p>
            <div className="pt-4 flex gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="text-sm tracking-wide border border-white/20 px-5 py-2.5 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              >
                Resume ↗
              </Link>
              <Link
                href="/projects"
                className="text-sm tracking-wide bg-white/10 px-5 py-2.5 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/profile.jpg"
              alt="Michael S Becker"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-8">Skills & Tools</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-white/50 text-xs tracking-widest uppercase mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
