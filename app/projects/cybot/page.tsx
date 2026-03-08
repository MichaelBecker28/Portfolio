import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortfolioImage } from "@/components/ui/portfolio-image"

export default function CyBot() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/projects" className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="mb-10">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Embedded Systems · Robotics</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">CyBot — Autonomous Robot</h1>
          <div className="h-px w-16 bg-white/20" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["C", "UART", "Embedded Systems", "Sensor Fusion", "iRobot Roomba"].map((tag) => (
            <span key={tag} className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative aspect-video mb-12 overflow-hidden border border-white/10 bg-white/5">
          <PortfolioImage src="/cybot-diagram.png" alt="CyBot Diagram" fill className="object-cover object-top" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-5 text-white/50 text-[15px] leading-relaxed">
            <p>
              CyBot is an autonomous navigation system built on the iRobot Roomba 600 Open Interface,
              programmed entirely in C on a TM4C123 microcontroller. It uses IR cliff sensors,
              bump sensors, and a sonar array to navigate environments without human intervention.
            </p>
            <p>
              The robot communicates via UART serial to a host system over WiFi, allowing remote
              monitoring and manual override. A state machine governs obstacle avoidance, turning
              logic, and hazard detection in real time.
            </p>
            <p>
              The project required deep understanding of hardware timing, interrupt-driven I/O,
              and low-level register manipulation — cementing core embedded systems skills.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Language</p>
              <p className="text-white/60 text-sm">C (bare metal)</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Hardware</p>
              <p className="text-white/60 text-sm">TM4C123 · Roomba 600 · HC-SR04</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Interface</p>
              <p className="text-white/60 text-sm">UART · WiFi · OI Protocol</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
