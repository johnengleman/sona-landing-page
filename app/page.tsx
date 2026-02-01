"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./components/Icon";
import { ParallaxPill } from "./components/Pill";

/**
 * VERSION 1: Light & Airy
 * - Warm cream palette matching app's light mode
 * - Parallax floating pills with app's actual colors
 * - Focus on the app's visual language
 * - Friendly, welcoming tone
 */

const highlights = [
  {
    title: "Consistency over streaks",
    desc: "A rolling score rewards real progress instead of all‑or‑nothing chains.",
  },
  {
    title: "Rest days that protect momentum",
    desc: "Take a break when you need it without resetting your progress.",
  },
];

export default function Version1() {
  return (
    <div className="min-h-screen bg-[#fffbf7] text-[#2d2a26] font-sans selection:bg-amber-200 overflow-x-hidden">
      {/* Warm background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-linear-to-bl from-amber-100/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-linear-to-tr from-[#4a9a7c]/5 to-transparent" />
      </div>

      {/* Parallax Pills Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <ParallaxPill
          color="blue"
          variant="filled"
          size="xl"
          speed={-0.3}
          rotate={-15}
          opacity={0.15}
          className="absolute top-[15%] left-[8%]"
        />
        <ParallaxPill
          color="green"
          variant="filled"
          size="lg"
          speed={0.4}
          rotate={20}
          opacity={0.12}
          className="absolute top-[25%] right-[10%]"
        />
        <ParallaxPill
          color="amber"
          variant="filled"
          size="md"
          speed={-0.5}
          rotate={10}
          opacity={0.2}
          className="absolute top-[60%] left-[5%]"
        />
        <ParallaxPill
          color="blue"
          variant="faded"
          size="lg"
          speed={0.3}
          rotate={-10}
          opacity={0.1}
          className="absolute top-[70%] right-[15%]"
        />
        <ParallaxPill
          color="green"
          variant="filled"
          size="sm"
          speed={-0.2}
          rotate={25}
          opacity={0.25}
          className="absolute top-[40%] right-[5%]"
        />
      </div>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf7]/80 backdrop-blur-xl border-b border-amber-900/5">
        <div className="mx-auto w-full max-w-6xl px-6 min-h-16 py-3 sm:py-0 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image
                src="/icon.png"
                alt="Sona logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="font-bold text-lg">Sona</span>
              <span className="hidden sm:block text-[11px] uppercase tracking-[0.18em] text-[#6b6560] font-medium">
                the no‑streak habit tracker
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#6b6560]" />
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#2d2a26] text-white text-sm font-semibold hover:bg-[#3d3a36] transition-colors shadow-xl shadow-amber-900/10 sm:gap-3 sm:px-6 sm:py-2.5 sm:rounded-2xl"
          >
            <Icon icon="simple-icons:apple" className="w-4 h-4" />
            <span className="hidden sm:inline">Get the beta</span>
            <span className="sm:hidden">Get beta</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero */}
        <section className="pt-24 pb-32">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
                  Build habits without{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">streak guilt</span>
                    <span className="absolute inset-x-0 -bottom-1 h-[4px] bg-amber-200/70 -z-0 rounded-full" />
                  </span>
                  .
                  <br />
                  <br />
                  Track{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">consistency,</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 8 Q 100 2 198 8"
                        stroke="#4a6fa5"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  not perfection.
                </h1>

                <p className="text-xl text-[#6b6560] leading-relaxed mb-10 max-w-xl">
                  Sona replaces fragile streaks with a rolling consistency score
                  and built‑in rest days—so a missed day doesn&rsquo;t erase
                  your progress and you keep showing up.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#2d2a26] text-white font-semibold hover:bg-[#3d3a36] transition-colors shadow-xl shadow-amber-900/10"
                  >
                    <Icon icon="simple-icons:apple" className="w-5 h-5" />
                    Get the beta
                  </a>
                </div>
                <p className="mt-4 text-sm text-[#6b6560]">
                  iOS first, Android beta coming next.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start justify-center lg:justify-end"
              >
                <div className="w-full max-w-none">
                  <img
                    src="/daily.png"
                    alt="Sona daily view"
                    className="block w-full h-auto max-h-[75vh] object-contain"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="py-20 border-t border-amber-900/5">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="text-left md:text-center mb-12">
              <p className="text-sm font-semibold text-[#4a6fa5] uppercase tracking-wider mb-3">
                Why it works
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Built to help you follow through
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-white border border-amber-100 shadow-lg shadow-amber-900/5"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#6b6560] leading-relaxed">{item.desc}</p>
                  {item.title === "Consistency over streaks" ? (
                    <div className="mt-6 grid gap-4">
                      <img
                        src="/consistency-1.png"
                        alt="Consistency over streaks screenshot 1"
                        width={640}
                        height={360}
                      />
                      <img
                        src="/consistency-2.png"
                        alt="Consistency over streaks screenshot 2"
                        width={640}
                        height={360}
                      />
                    </div>
                  ) : item.title === "Rest days that protect momentum" ? (
                    <div className="mt-6 grid gap-4">
                      <img
                        src="/rest-1.png"
                        alt="Rest days screenshot 1"
                        width={640}
                        height={360}
                      />
                      <img
                        src="/rest-2.png"
                        alt="Rest days screenshot 2"
                        width={640}
                        height={360}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 border-t border-amber-900/5">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-left md:text-center mb-12">
              <p className="text-sm font-semibold text-[#4a9a7c] uppercase tracking-wider mb-3">
                Statistics
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                See your progress, clearly
              </h2>
              <p className="text-lg text-[#6b6560] max-w-2xl md:mx-auto">
                Track consistency trends and spot what&rsquo;s working at a
                glance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { src: "/stats-1.png", label: "Statistics screenshot 1" },
                { src: "/stats-2.png", label: "Statistics screenshot 2" },
                { src: "/stats-3.png", label: "Statistics screenshot 3" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={720}
                    height={480}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section id="screens" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-left md:text-center mb-12">
              <p className="text-sm font-semibold text-[#4a9a7c] uppercase tracking-wider mb-3">
                See it at a glance
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                A calm, clear view of your habits
              </h2>
              <p className="text-lg text-[#6b6560] max-w-2xl md:mx-auto">
                Daily, weekly, or monthly—choose what fits your life and keep
                moving forward without the pressure to be perfect.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 justify-items-center">
              {[
                { src: "/daily.png", label: "Daily" },
                { src: "/weekly.png", label: "Weekly" },
                { src: "/monthly.png", label: "Monthly" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center w-full max-w-[360px]"
                >
                  <div className="mb-4 text-lg font-bold tracking-wide text-[#2d2a26]">
                    {item.label}
                  </div>
                  <div
                    style={{ aspectRatio: "10 / 16" }}
                    className="relative w-full mx-auto rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.label} habits view`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="download"
          className="py-20 md:py-24 border-t border-amber-900/5"
        >
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-linear-to-br from-[#4a6fa5]/10 via-[#4a9a7c]/10 to-amber-100/50 border border-[#4a6fa5]/20 p-8 sm:p-10 md:p-16 text-center">
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-[#4a6fa5]/10 blur-xl" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[#4a9a7c]/10 blur-xl" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Ready to feel consistent
                  <br />
                  without the pressure?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#6b6560] mb-8 sm:mb-10 max-w-lg mx-auto">
                  Build habits that last in real life—no shame, just progress.
                </p>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-[#2d2a26] text-white font-bold text-base sm:text-lg hover:bg-[#3d3a36] transition-colors shadow-xl shadow-amber-900/10"
                >
                  <Icon icon="simple-icons:apple" className="w-6 h-6" />
                  Get the beta
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-amber-900/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/icon.png"
                alt="Sona logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="font-bold">Sona</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#6b6560] font-medium">
                the no‑streak habit tracker
              </span>
            </span>
          </div>
          <div className="flex gap-8 text-sm text-[#6b6560]">
            <a href="#" className="hover:text-[#2d2a26]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#2d2a26]">
              Terms
            </a>
            <a href="#" className="hover:text-[#2d2a26]">
              Twitter
            </a>
          </div>
          <p className="text-[#6b6560] text-sm">© 2026 Sona.</p>
        </div>
      </footer>
    </div>
  );
}
