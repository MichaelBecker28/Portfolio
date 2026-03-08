import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortfolioImage } from "@/components/ui/portfolio-image"

export default function NutriFit() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/projects" className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="mb-10">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Mobile · UI/UX</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">NutriFit App</h1>
          <div className="h-px w-16 bg-white/20" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["React", "Mobile-first", "Nutrition Tracking", "UI/UX", "Health Tech"].map((tag) => (
            <span key={tag} className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative aspect-video mb-12 overflow-hidden border border-white/10 bg-white/5">
          <PortfolioImage src="/nutrifit-goals.png" alt="NutriFit Goals" fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-5 text-white/50 text-[15px] leading-relaxed">
            <p>
              NutriFit is a mobile-first nutrition and fitness tracking application designed for
              simplicity and daily usability. Users can log meals, track macronutrients, set
              personal goals, and monitor weekly trends.
            </p>
            <p>
              The app was designed mobile-first with an emphasis on frictionless data entry —
              minimizing the number of taps required to log a meal and keeping the most-used
              features front and center.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Focus</p>
              <p className="text-white/60 text-sm">UX Design & Prototyping</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Stack</p>
              <p className="text-white/60 text-sm">React · Mobile CSS · REST API</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {["/nutrifit-goals.png", "/nutrifit-nutrition.png", "/nutrifit-profile.png"].map((src, i) => (
            <div key={i} className="relative aspect-[9/16] overflow-hidden border border-white/10 bg-white/5">
              <PortfolioImage src={src} alt={`NutriFit screenshot ${i + 1}`} fill className="object-cover object-top" />
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
