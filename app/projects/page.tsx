import Link from "next/link"
import { PortfolioImage } from "@/components/ui/portfolio-image"

const projects = [
  {
    id: "ai-threat-detection",
    title: "AI Threat Detection Platform",
    description:
      "A real-time cybersecurity dashboard powered by machine learning that identifies and categorizes network threats. Features live threat feeds, attack analytics, and automated alerting.",
    tags: ["Python", "Machine Learning", "Network Security", "React"],
    href: "/projects/ai-threat-detection",
    image: "/attack-analytics.png",
  },
  {
    id: "senior-design",
    title: "Senior Design — SmartClass",
    description:
      "A full-stack learning management platform built for Iowa State's senior design capstone. Supports live chat, professor dashboards, course material uploads, and student tracking.",
    tags: ["React", "Node.js", "Full Stack", "UI/UX"],
    href: "/projects/senior-design",
    image: "/smartclass-home.png",
  },
  {
    id: "cybot",
    title: "CyBot — Autonomous Robot",
    description:
      "An iRobot Roomba-based autonomous navigation system programmed in C with UART communication. Implements obstacle avoidance, sensor fusion, and remote control over WiFi.",
    tags: ["C", "Embedded Systems", "UART", "Robotics"],
    href: "/projects/cybot",
    image: "/cybot-diagram.png",
  },
  {
    id: "nutrifit",
    title: "NutriFit App",
    description:
      "A mobile-first nutrition and fitness tracking application. Allows users to log meals, set goals, and monitor macronutrient intake with a clean, intuitive interface.",
    tags: ["React", "Mobile", "UI/UX", "Health Tech"],
    href: "/projects/nutrifit",
    image: "/nutrifit-goals.png",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Work</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Projects</h1>
          <div className="h-px w-16 bg-white/20" />
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group block border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-white/5 border-b border-white/10">
                <PortfolioImage
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-white font-light text-lg mb-2 group-hover:text-white transition-colors">
                  {p.title}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
