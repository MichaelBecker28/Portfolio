import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SeniorDesign() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/projects" className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="mb-10">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Senior Design · Full Stack</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">SmartClass LMS</h1>
          <div className="h-px w-16 bg-white/20" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["React", "Node.js", "PostgreSQL", "WebSocket", "UI/UX"].map((tag) => (
            <span key={tag} className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative aspect-video mb-12 overflow-hidden border border-white/10 bg-white/5">
          <Image src="/smartclass-home.png" alt="SmartClass Home" fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-5 text-white/50 text-[15px] leading-relaxed">
            <p>
              SmartClass is a full-stack Learning Management System developed as Iowa State University's
              senior design capstone project. It provides professors and students with a modern
              platform for course delivery, communication, and progress tracking.
            </p>
            <p>
              Key features include real-time live chat powered by WebSockets, professor dashboards
              with class analytics, file upload for course materials, and a structured student
              progress view. The UI was designed from scratch with accessibility and clarity in mind.
            </p>
            <p>
              The project followed a full agile development cycle with weekly sprints, stakeholder
              reviews, and a formal design document and presentation to faculty.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Team</p>
              <p className="text-white/60 text-sm">4-person capstone group</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Stack</p>
              <p className="text-white/60 text-sm">React · Node.js · PostgreSQL · WS</p>
            </div>
            <div>
              <p className="text-white/25 text-xs tracking-widest uppercase mb-2">Duration</p>
              <p className="text-white/60 text-sm">2 semesters</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {["/smartclass-professor-view.png", "/smartclass-live-chat.png", "/smartclass-course-page.png", "/smartclass-create-class.png", "/smartclass-upload-materials.png", "/smartclass-course-materials.png"].map((src, i) => (
            <div key={i} className="relative aspect-video overflow-hidden border border-white/10 bg-white/5">
              <Image src={src} alt={`SmartClass screenshot ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
