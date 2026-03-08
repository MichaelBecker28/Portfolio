const docs = [
  {
    title: "General Education Reflection",
    description:
      "Examines how general education courses contributed to my development as an engineer and well-rounded individual, analyzing the impact of liberal arts on technical problem-solving.",
    file: "/General-education-reflection.pdf",
    filename: "General-education-reflection.pdf",
  },
  {
    title: "Cumulative Reflection",
    description:
      "A comprehensive reflection on my entire academic experience — key learning moments, challenges overcome, and how my education has prepared me for a career in engineering.",
    file: "/cumulative-reflection.pdf",
    filename: "cumulative-reflection.pdf",
  },
  {
    title: "Ethics Paper (CYBE 394)",
    description:
      "Academic paper examining ethical considerations in engineering practice, exploring professional responsibility, societal impact, and moral decision-making in technical fields.",
    file: "/ethics-paper-394.pdf",
    filename: "ethics-paper-394.pdf",
  },
]

export default function Reflections() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-3">Academic</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Reflections</h1>
          <div className="h-px w-16 bg-white/20" />
          <p className="text-white/40 text-sm mt-6 max-w-xl leading-relaxed">
            Portfolio requirement documents showcasing my educational journey and growth as an engineer.
          </p>
        </div>

        {/* Documents */}
        <div className="space-y-px">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-white/25 text-xs tracking-widest uppercase mb-2">
                    Document {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-white font-light text-xl mb-3">{doc.title}</h2>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl">{doc.description}</p>
                </div>

                <div className="flex flex-col gap-2 sm:items-end flex-shrink-0">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase border border-white/20 px-5 py-2.5 text-white/50 hover:text-white hover:border-white/50 transition-colors text-center"
                  >
                    View PDF
                  </a>
                  <a
                    href={doc.file}
                    download={doc.filename}
                    className="text-xs tracking-widest uppercase text-white/25 hover:text-white/60 transition-colors text-center px-5 py-2.5"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
