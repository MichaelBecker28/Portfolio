"use client"
import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Spiral background */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Hero text */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="text-white/40 text-xs tracking-[0.35em] uppercase mb-4">
          Cybersecurity Engineering
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-extralight tracking-tight mb-6">
          Michael S Becker
        </h1>
        <p className="text-white/40 text-sm tracking-[0.2em] uppercase mb-12">
          Iowa State University · Class of 2025
        </p>
        <Link
          href="/about"
          className="text-white/60 text-sm tracking-[0.25em] uppercase border border-white/20 px-8 py-3 hover:text-white hover:border-white/60 transition-all duration-300"
        >
          View Portfolio
        </Link>
      </div>
    </main>
  )
}
