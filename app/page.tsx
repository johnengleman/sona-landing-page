"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./components/Icon";
import { ParallaxPill, HabitGrid } from "./components/Pill";

/**
 * VERSION 1: Light & Airy
 * - Warm cream palette matching app's light mode
 * - Parallax floating pills with app's actual colors
 * - Focus on the app's visual language
 * - Friendly, welcoming tone
 */

const habits = [
  { name: "Drink Water", color: "blue" as const, streak: 14 },
  { name: "Go For a Walk", color: "green" as const, streak: 7 },
  { name: "Read", color: "amber" as const, streak: 21 },
];

const benefits = [
  {
    icon: "solar:bell-bing-bold-duotone",
    title: "Reminders",
    desc: "Smart nudges that fit your schedule.",
    color: "bg-[#4a6fa5]/10 text-[#4a6fa5]",
  },
  {
    icon: "solar:folder-with-files-bold-duotone",
    title: "Categories",
    desc: "Organize habits by area of life.",
    color: "bg-[#4a9a7c]/10 text-[#4a9a7c]",
  },
  {
    icon: "solar:palette-round-bold-duotone",
    title: "Icons",
    desc: "Make each habit easy to spot.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: "solar:document-add-bold-duotone",
    title: "Templates",
    desc: "Start fast with ready-made routines.",
    color: "bg-[#4a6fa5]/10 text-[#4a6fa5]",
  },
  {
    icon: "solar:chart-square-bold-duotone",
    title: "Statistics",
    desc: "See trends and consistency at a glance.",
    color: "bg-[#4a9a7c]/10 text-[#4a9a7c]",
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
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <Image
                src="/logo_small.png"
                alt="Sona logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg">Sona</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#6b6560]">
            <a
              href="#features"
              className="hover:text-[#2d2a26] transition-colors"
            >
              Features
            </a>
          </nav>
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-2xl bg-[#2d2a26] text-white text-sm font-semibold hover:bg-[#3d3a36] transition-colors shadow-xl shadow-amber-900/10"
          >
            <Icon icon="simple-icons:apple" className="w-4 h-4" />
            Get the beta
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero */}
        <section className="pt-24 pb-32 px-6">
          <div className="max-w-6xl mx-auto">
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
                  Track{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">consistency</span>
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
                  </span>
                  , not perfection.
                </h1>

                <p className="text-xl text-[#6b6560] leading-relaxed mb-10 max-w-xl">
                  Sona replaces streaks with a rolling consistency score and
                  flexible goals (daily, weekly, or monthly). Miss a day? You
                  still make progress—with optional rest days that keep you on
                  track instead of starting over.
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start justify-center lg:justify-end"
              >
                <div className="w-full max-w-md lg:max-w-lg h-[75vh]">
                  <img
                    src="/daily.png"
                    alt="Sona daily view"
                    className="block w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Consistency Score */}
        <section className="py-24 px-6 border-t border-amber-900/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-sm font-semibold text-[#4a6fa5] uppercase tracking-wider mb-3">
                  Consistency over streaks
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  No more &ldquo;all‑or‑nothing&rdquo; streaks.
                </h2>
                <p className="text-lg text-[#6b6560] leading-relaxed mb-6 max-w-xl">
                  People told us streaks create &ldquo;streak guilt&rdquo; and
                  make them quit the moment a streak breaks. Consistency fixes
                  that. Your score is a rolling average of how close you get to
                  your target each day, week, or month—so progress still counts,
                  even when life gets in the way.
                </p>
                <ul className="space-y-3 text-[#6b6560] max-w-xl">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4a9a7c]" />
                    <span>
                      Each period earns partial credit, not a reset to zero.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4a6fa5]" />
                    <span>Rest days don&rsquo;t count against you.</span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>
                      You can compare your score month‑over‑month instead of
                      chasing a fragile streak.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 justify-items-center">
                {[
                  {
                    src: "/score-needs-work.png",
                    label: "Needs Work",
                    sub: "Under 70%",
                  },
                  { src: "/score-good.png", label: "Good", sub: "70–89%" },
                  {
                    src: "/score-excellent.png",
                    label: "Excellent",
                    sub: "90%+",
                  },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div
                      style={{ aspectRatio: "10 / 16" }}
                      className="relative max-h-[620px] w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden"
                    >
                      <Image
                        src={item.src}
                        alt={`${item.label} consistency score`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm font-semibold">
                      {item.label}
                    </div>
                    <div className="text-xs text-[#6b6560]">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rest Days */}
        <section className="py-24 px-6 bg-[#f5f0e8]/50 border-y border-amber-900/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-sm font-semibold text-[#4a9a7c] uppercase tracking-wider mb-3">
                  Guilt‑free rest
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Take a guilt‑free break without breaking your progress.
                </h2>
                <p className="text-lg text-[#6b6560] leading-relaxed mb-6 max-w-xl">
                  People told us streaks feel &ldquo;all‑or‑nothing&rdquo; and
                  create &ldquo;streak guilt.&rdquo; Rest days fix that. You can
                  pause without harming your metrics—no reset, no shame.
                </p>
                <ul className="space-y-3 text-[#6b6560] max-w-xl">
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4a9a7c]" />
                    <span>
                      Rest days aren&rsquo;t earned—they&rsquo;re always
                      available when you need them.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4a6fa5]" />
                    <span>
                      You can&rsquo;t take two in a row, so breaks stay
                      balanced.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>Works the same for rest weeks and rest months.</span>
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 justify-items-center">
                {[
                  { src: "/rest-day-confirm.png", label: "Confirmation" },
                  { src: "/rest-day.png", label: "Rest day" },
                ].map((item) => (
                  <div key={item.label} className="text-center w-full">
                    <div
                      style={{ aspectRatio: "10 / 16" }}
                      className="relative w-full max-w-[360px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] mx-auto rounded-3xl overflow-hidden"
                    >
                      <Image
                        src={item.src}
                        alt={`${item.label} screen`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-3 text-sm font-semibold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Groups */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left md:text-center mb-12">
              <p className="text-sm font-semibold text-[#4a9a7c] uppercase tracking-wider mb-3">
                Group by daily, weekly, or monthly
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Habits that fit real life
              </h2>
              <p className="text-lg text-[#6b6560] max-w-2xl md:mx-auto">
                Stop feeling behind. When your habits match their natural
                rhythm, you build consistency without burnout. Daily stays
                lightweight, weekly feels flexible, and monthly keeps long‑term
                goals alive.
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
                  <div className="mt-3 text-sm font-semibold text-[#2d2a26]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Habit Grid Demo */}
        <section className="py-20 px-6 border-t border-amber-900/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-amber-100 shadow-xl shadow-amber-900/5"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-semibold text-[#4a6fa5] uppercase tracking-wider mb-3">
                    Your Month at a Glance
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Track progress, not perfection
                  </h2>
                  <p className="text-[#6b6560] leading-relaxed">
                    Every day matters, but not every day needs to be perfect.
                    Your consistency score adjusts gradually — no dramatic
                    resets.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm font-medium text-[#4a6fa5] mb-3">
                      Drink Water
                    </p>
                    <HabitGrid color="blue" rows={3} cols={10} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4a9a7c] mb-3">
                      Go For a Walk
                    </p>
                    <HabitGrid
                      color="green"
                      rows={3}
                      cols={10}
                      pattern={[
                        [2, 1, 2, 2, 1, 2, 2, 2, 1, 2],
                        [2, 2, 1, 1, 2, 2, 2, 2, 2, 2],
                        [1, 2, 2, 2, 2, 1, 2, 2, 2, 2],
                      ]}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="features"
          className="py-24 px-6 bg-[#f5f0e8]/50 border-y border-amber-900/5"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-left md:text-center mb-16">
              <p className="text-sm font-semibold text-[#4a9a7c] uppercase tracking-wider mb-3">
                Everything you&rsquo;d expect, done beautifully
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Standard features
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-amber-100 shadow-lg shadow-amber-900/5"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${b.color} mb-5`}
                  >
                    <Icon icon={b.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-[#6b6560] leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="download"
          className="py-24 px-6 border-t border-amber-900/5"
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-linear-to-br from-[#4a6fa5]/10 via-[#4a9a7c]/10 to-amber-100/50 border border-[#4a6fa5]/20 p-12 md:p-16 text-center">
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-[#4a6fa5]/10 blur-xl" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[#4a9a7c]/10 blur-xl" />

              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to be kinder
                  <br />
                  to yourself?
                </h2>
                <p className="text-xl text-[#6b6560] mb-10 max-w-lg mx-auto">
                  Start building habits that actually stick — without the guilt.
                </p>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#2d2a26] text-white font-bold text-lg hover:bg-[#3d3a36] transition-colors shadow-xl shadow-amber-900/10"
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-linear-to-br from-amber-400 to-orange-400 flex items-center justify-center">
              <span className="text-white text-sm">☀️</span>
            </div>
            <span className="font-bold">Sona</span>
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
