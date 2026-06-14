"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { ChevronDown, Smartphone, Users, Zap, Shield } from "lucide-react";

const stats = [
  { icon: Users,  value: "10K+",   label: "Early adopters" },
  { icon: Zap,    value: "<50ms",  label: "Latencia API" },
  { icon: Shield, value: "99.9%",  label: "Uptime SLA" },
];

const floatingChips = [
  {
    text: "🏆 MVP de la noche",
    delay: 0.7,
    className: "top-[12%] -left-4 lg:-left-10",
  },
  {
    text: "+1.250 NightPts",
    delay: 0.85,
    className: "top-[42%] -right-4 lg:-right-14",
  },
  {
    text: "📍 Check-in · Ruta 39",
    delay: 1.0,
    className: "bottom-[22%] -left-4 lg:-left-12",
  },
];

const ranking = [
  { pos: "1", name: "Carlos M.", pts: "4.320", gradient: "from-yellow-400 to-orange-500" },
  { pos: "2", name: "Lucía R.",  pts: "3.875", gradient: "from-slate-300 to-slate-500"  },
  { pos: "3", name: "Marcos T.", pts: "3.210", gradient: "from-orange-500 to-orange-700" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ns-bg"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Mesh colour blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[680px] h-[680px] bg-ns-violet/[0.14] rounded-full blur-[110px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-ns-cyan/[0.09] rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-ns-fuchsia/[0.07] rounded-full blur-[100px]" />
      </div>

      {/* ── Content grid ── */}
      <div className="container relative z-10 px-8 sm:px-12 py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center max-w-7xl mx-auto min-h-screen lg:min-h-0 lg:py-24">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-ns-violet/30 bg-ns-violet/[0.08] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ns-cyan animate-pulse" />
              <span className="text-ns-cyan text-[11px] font-bold tracking-[0.14em] uppercase">
                NightRank · App &amp; API Docs v1.0
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display font-extrabold leading-[1.04] tracking-tight mb-7"
              style={{ fontSize: "clamp(44px, 5.5vw, 76px)" }}
            >
              <span className="block text-white">Tu noche.</span>
              <span className="block text-gradient">Tu historia.</span>
              <span className="block text-white">Tu score.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-ns-muted leading-[1.7] mb-10 max-w-[500px] text-[15px] sm:text-[16px]"
            >
              La plataforma social y competitiva que gamifica tus salidas
              nocturnas. Registra, compite y descubre quién es el MVP de la
              noche con tus amigos.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-12"
            >
              <GradientButton variant="primary">
                <Smartphone className="w-4 h-4" />
                Descargar la App
              </GradientButton>
              <GradientButton
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("concept")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Leer la Documentación
              </GradientButton>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="stat-strip flex items-center gap-8"
            >
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-ns-violet" />
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-base leading-tight">
                        {s.value}
                      </div>
                      <div className="text-ns-muted text-[11px] leading-tight">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Phone ── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient glow behind phone */}
            <div
              aria-hidden
              className="absolute w-[280px] h-[380px] bg-ns-violet/[0.22] rounded-full blur-[72px] pointer-events-none"
            />

            {/* Floating status chips */}
            {floatingChips.map((chip, i) => (
              <motion.div
                key={i}
                className={`absolute ${chip.className} z-20 glassmorphism px-3 py-1.5 rounded-full text-[11px] font-semibold text-white whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.35)]`}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: chip.delay, ease: [0.16, 1, 0.3, 1] }}
              >
                {chip.text}
              </motion.div>
            ))}

            {/* Phone frame */}
            <div className="relative w-[236px] h-[496px] rounded-[3rem] bg-[#0c0c13] phone-glow z-10 overflow-hidden">
              {/* Dynamic island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-black rounded-full z-30 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.07)]" />
                <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.04)]" />
              </div>

              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col pt-[52px] pb-3 px-3">

                {/* App header */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <span className="font-display font-bold text-[15px] text-white tracking-tight">NightRank</span>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-ns-violet to-ns-fuchsia flex items-center justify-center text-[10px] font-bold text-white shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
                    JD
                  </div>
                </div>

                {/* MVP card */}
                <div className="rounded-xl bg-[rgba(124,58,237,0.15)] border border-ns-violet/25 p-3 mb-3">
                  <div className="text-[9px] font-bold text-ns-cyan uppercase tracking-[0.12em] mb-2">
                    MVP de anoche
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-base shadow-[0_4px_10px_rgba(234,179,8,0.3)]">
                      👑
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-bold text-white leading-tight">Carlos M.</div>
                      <div className="text-[10px] text-ns-muted truncate">"El más divertido"</div>
                    </div>
                    <div className="text-ns-violet font-display font-bold text-sm">+1.2k</div>
                  </div>
                </div>

                {/* Ranking list */}
                <div className="px-1 mb-2">
                  <div className="text-[9px] font-bold text-ns-muted uppercase tracking-[0.1em]">
                    Ranking semanal
                  </div>
                </div>
                <div className="flex-1 space-y-1.5 overflow-hidden">
                  {ranking.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg bg-[rgba(255,255,255,0.04)] px-2.5 py-2"
                    >
                      <div
                        className={`w-5 h-5 rounded-md bg-gradient-to-br ${row.gradient} flex items-center justify-center text-[9px] font-bold text-white shrink-0`}
                      >
                        {row.pos}
                      </div>
                      <span className="flex-1 text-[12px] text-white font-medium truncate">{row.name}</span>
                      <span className="text-[10px] text-ns-muted font-mono">{row.pts}</span>
                    </div>
                  ))}
                </div>

                {/* Score bar */}
                <div className="mt-3 px-1">
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-ns-muted">Tu score este mes</span>
                    <span className="text-ns-violet font-bold">2.840 / 5k</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-ns-violet to-ns-fuchsia"
                      style={{ width: "57%" }}
                    />
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="mt-3 h-11 bg-[rgba(255,255,255,0.05)] rounded-2xl flex justify-around items-center px-1 backdrop-blur-sm">
                  {(["🏠", "👥", null, "🏆", "👤"] as (string | null)[]).map((icon, i) =>
                    icon === null ? (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-ns-violet to-ns-fuchsia flex items-center justify-center -translate-y-2 shadow-[0_4px_14px_rgba(124,58,237,0.5)] text-white font-bold text-lg"
                      >
                        +
                      </div>
                    ) : (
                      <div key={i} className={`text-[15px] ${i === 0 ? "opacity-100" : "opacity-35"}`}>
                        {icon}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ns-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
