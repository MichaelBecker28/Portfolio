import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortfolioImage } from "@/components/ui/portfolio-image"

export default function AIThreatDetection() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/projects" className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="mb-10">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Cybersecurity · ML</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">AI Threat Detection Platform</h1>
          <div className="h-px w-16 bg-white/20" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["Python", "Machine Learning", "Network Security", "React", "Real-time Dashboard"].map((tag) => (
            <span key={tag} className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative aspect-video mb-12 overflow-hidden border border-white/10 bg-white/5">
          <PortfolioImage src="/attack-analytics.png" alt="Attack Analytics" fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-5 text-white/50 text-[15px] leading-relaxed">
            <p>
              A real-time cybersecurity monitoring dashboard that leverages machine learning to detect,
              classify, and visualize network threats as they occur. The system ingests live network
              telemetry and passes it through a trained classification model to identify attack patterns.
            </p>
            <p>
              The platform features a live threat feed, geographic attack source visualization, and
              configurable alerting thresholds — providing SOC analysts with actionable intelligence
              at a glance.
            </p>
            <p>
              The ML pipeline was trained on labeled network traffic datasets (KDD99, CICIDS2017),
              achieving over 94% classification accuracy across 10 attack categories.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Role</p>
              <p className="text-white/60 text-sm">Lead Developer</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Stack</p>
              <p className="text-white/60 text-sm">Python · scikit-learn · React · WebSocket</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Status</p>
              <p className="text-white/60 text-sm">Completed</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5">
            <PortfolioImage src="/dashboard-overview.png" alt="Dashboard Overview" fill className="object-cover" />
          </div>
          <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5">
            <PortfolioImage src="/threat-feed.png" alt="Threat Feed" fill className="object-cover" />
          </div>
        </div>

      </div>
    </main>
  )
}
