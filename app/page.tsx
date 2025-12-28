"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import NoiseOverlay from "./components/NoiseOverlay";
import Sparkle from "./components/Sparkle";

// Pebble Component (Shiny Jewel/Candy Style)
const Pebble = ({
  className,
  color,
  initialRotation = 0,
  speed = 0.2,
  parallaxSpeed = 0.1,
}: {
  className?: string;
  color: string;
  initialRotation?: number;
  speed?: number;
  parallaxSpeed?: number;
}) => {
  const { scrollY } = useScroll();
  const rotate = useTransform(
    scrollY,
    [0, 2000],
    [initialRotation, initialRotation + speed * 360]
  );
  const y = useTransform(scrollY, [0, 1000], [0, parallaxSpeed * 200]);

  return (
    <motion.div
      className={`absolute z-0 rounded-[35%] ${className}`}
      style={{
        // Base color
        backgroundColor: color,
        // Outer glow/shadow using the pebble's color
        boxShadow: `
          inset 20px 20px 40px rgba(255,255,255,0.25),
          inset -20px -20px 40px rgba(0,0,0,0.2),
          0 20px 40px -12px ${color}, 
          0 8px 16px -8px ${color}
        `,
        rotate,
        y,
      }}
    >
      {/* Main Body Gradient (Simulates the gemHighlight -> gemBottom) */}
      <div
        className="absolute inset-0 rounded-[35%]"
        style={{
          background: `linear-gradient(135deg, 
          rgba(255,255,255,0.4) 0%, 
          rgba(255,255,255,0.1) 25%, 
          transparent 50%, 
          rgba(0,0,0,0.05) 75%, 
          rgba(0,0,0,0.15) 100%)`,
        }}
      />

      {/* Top-Left Highlight (Sharp reflection) */}
      <div
        className="absolute inset-0 rounded-[35%]"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 40%)`,
        }}
      />
    </motion.div>
  );
};

// Animated Feature: Rest Days System
const GraceDemo = () => {
  return (
    <div className="bg-surface rounded-2xl shadow-2xl p-6 w-full max-w-xs mx-auto border border-white/5">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div
            key={i}
            className="text-center text-xs text-text-tertiary font-medium"
          >
            {d}
          </div>
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`aspect-square rounded-lg flex items-center justify-center text-sm font-bold
              ${
                i === 3
                  ? "bg-primary/20 text-primary"
                  : i < 3
                  ? "bg-success/20 text-success"
                  : "bg-surface-secondary text-text-tertiary"
              }`}
          >
            {i < 3 && "✓"}
            {i === 3 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                G
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-3 bg-primary/10 p-3 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
          🛡️
        </div>
        <div>
          <div className="text-xs font-bold text-text">Streak Saved</div>
          <div className="text-[10px] text-text-secondary">
            Rest day applied for Thursday
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Feature: Focus List
const FocusDemo = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChecked((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-surface rounded-2xl shadow-2xl p-6 w-full max-w-xs mx-auto border border-white/5 relative overflow-hidden">
      <div className="text-sm font-bold text-text-secondary mb-4 uppercase tracking-wider">
        My Habits
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              backgroundColor: checked ? "var(--color-success)" : "transparent",
              borderColor: checked
                ? "var(--color-success)"
                : "var(--color-surface-secondary)",
            }}
            className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          >
            {checked && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-white text-xs"
              >
                ✓
              </motion.span>
            )}
          </motion.div>
          <span
            className={`text-sm font-medium transition-colors ${
              checked ? "text-text-tertiary line-through" : "text-text"
            }`}
          >
            Morning Meditation
          </span>
        </div>
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-5 h-5 rounded-full border-2 border-surface-secondary" />
          <span className="text-sm font-medium text-text">Read 10 pages</span>
        </div>
        <div className="flex items-center gap-3 opacity-50">
          <div className="w-5 h-5 rounded-full border-2 border-surface-secondary" />
          <span className="text-sm font-medium text-text">Drink water</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const phoneY = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <NoiseOverlay />
      <main className="pt-12 lg:pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative">
          {/* Spotlight Effect */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <Sparkle
            className="top-20 left-[10%] w-8 h-8 text-primary/60"
            delay={0}
          />
          <Sparkle
            className="top-40 right-[15%] w-6 h-6 text-accent-blue/60"
            delay={1.5}
          />
          <Sparkle
            className="bottom-20 left-[20%] w-4 h-4 text-success/60"
            delay={0.8}
          />

          <Pebble
            color="var(--color-blob-1)"
            className="w-[600px] h-[600px] -top-40 -right-40"
            initialRotation={12}
            speed={0.15}
            parallaxSpeed={0.5}
          />
          <Pebble
            color="var(--color-blob-2)"
            className="w-[400px] h-[400px] top-20 -left-20"
            initialRotation={-12}
            speed={-0.1}
            parallaxSpeed={0.8}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div style={{ y: textY }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border border-white/5 mb-8">
                  <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_var(--color-success)]"></span>
                  <span className="text-sm font-medium text-text-secondary">
                    Available on iOS
                  </span>
                </div>

                {/* Liquid Glass Card - Cozy Organic Shape */}
                <div className="relative rounded-tl-[3rem] rounded-tr-[8rem] rounded-br-[2rem] rounded-bl-[6rem] p-10 border border-white/5 bg-surface/60 backdrop-blur-[50px] backdrop-saturate-[150%] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(255,255,255,0.03)] mb-12 overflow-hidden group">
                  {/* Glossy Shine - Warmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none opacity-50" />

                  {/* Internal Noise Texture for Cozy Feel */}
                  <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  <h1 className="text-6xl lg:text-8xl font-friendly font-bold leading-[1.05] mb-8 tracking-tight text-text drop-shadow-2xl relative z-10">
                    The No-Streaks <br />
                    <span className="text-primary relative inline-block drop-shadow-sm">
                      Habit Tracker
                      <svg
                        className="absolute w-full h-4 -bottom-2 left-0 text-primary/40 drop-shadow-lg"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 5 Q 50 10 100 5"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-lg font-medium drop-shadow-md relative z-10">
                    Instead of a fragile chain, Sona tracks your Consistency
                    Score. Miss a day? Your score dips slightly (e.g., 95% →
                    93%), but it doesn't reset to zero. You never lose your
                    progress.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[8px_8px_16px_rgba(0,0,0,0.3),-4px_-4px_12px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.05)] hover:translate-y-[1px] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)]"
                  >
                    Download for iOS
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-4 text-sm text-text-tertiary">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-surface-secondary border-2 border-background flex items-center justify-center text-[10px] shadow-lg"
                      >
                        👤
                      </div>
                    ))}
                  </div>
                  <p className="drop-shadow-md">Join 1,000+ early users</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: phoneY }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[700px] flex items-center justify-center lg:justify-end"
              >
                {/* Mascot & Phone Composition */}
                <div className="relative z-10 w-[320px]">
                  {/* Glow behind phone */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-110" />

                  <div className="relative rounded-[3rem] border-[8px] border-surface-secondary shadow-2xl overflow-hidden bg-background h-[650px]">
                    <Image
                      src="/Screenshot_daily_dark_mode.png"
                      alt="App Screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature 1: Rest Days System (Bento Grid) */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Card: Main Value Prop */}
              <div className="md:col-span-2 bg-surface-secondary/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group hover:bg-surface-secondary/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-wider">
                    ✨ The Rest Days System
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text leading-tight">
                    Earned <br />
                    <span className="text-primary">
                      Rest Days/Weeks/Months.
                    </span>
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                    Consistency earns you "Rest Tokens". Spend them to take a
                    guilt-free break without breaking your streak.
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                  <Pebble
                    color="var(--color-blob-2)"
                    className="w-64 h-64"
                    speed={0.05}
                  />
                </div>
              </div>

              {/* Tall Card: Visual Demo */}
              <div className="bg-surface/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5" />
                <GraceDemo />
                <p className="mt-6 text-center text-sm text-text-tertiary font-medium">
                  Bank up to 3 tokens
                </p>
              </div>

              {/* Small Card 1: Benefit */}
              <div className="bg-surface-secondary/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-success/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  🧘‍♀️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">
                    Guilt-Free
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Take a break without the shame spiral.
                  </p>
                </div>
              </div>

              {/* Small Card 2: Benefit */}
              <div className="bg-surface-secondary/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-warning/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  🍕
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">
                    Cheat Days
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Perfect for diet breaks or study days off.
                  </p>
                </div>
              </div>

              {/* Wide Card: Stat */}
              <div className="md:col-span-1 bg-surface-secondary/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-5xl font-bold text-text mb-2">3x</div>
                <p className="text-sm text-text-secondary">
                  Max tokens you can bank
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Focus Today */}
        <section className="py-24 relative">
          <Pebble
            color="var(--color-blob-3)"
            className="w-[500px] h-[500px] bottom-0 right-[-100px]"
            initialRotation={-20}
            speed={-0.12}
          />

          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
                Flexible <br />
                <span className="text-accent-blue">Frequency.</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                You don't have to do things every day. You can set a goal like
                "Gym 3x per week" or "Read 10x per month." It tracks the volume,
                not the specific dates.
              </p>
            </div>
            <div>
              <FocusDemo />
            </div>
          </div>
        </section>

        {/* Feature 3: Stats & Context */}
        <section className="py-24 bg-surface-secondary/50 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Visualize your history
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Visualize monthly, quarterly, and annual performance history with
              beautiful, intuitive grids.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Grids",
                desc: "Visualize monthly, quarterly, and annual history with beautiful grids.",
                icon: "📅",
              },
              {
                title: "Precise Percentages",
                desc: "See your precise monthly performance as a percentage.",
                icon: "📊",
              },
              {
                title: "Intuitive History",
                desc: "Track your consistency over time with clear visualizations.",
                icon: "🔥",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-surface p-8 rounded-3xl shadow-lg border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-text">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Basics Grid */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-text">
              Everything you need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Smart Reminders",
                  desc: "Set custom notifications for each habit so you never miss a beat.",
                  icon: "🔔",
                },
                {
                  title: "Flexible Categories",
                  desc: "Group habits by area of life or goal to keep your tracking organized.",
                  icon: "📂",
                },
                {
                  title: "Detailed Stats",
                  desc: "Dive deep into your performance with streaks, completion rates, and history.",
                  icon: "📊",
                },
                {
                  title: "CSV Export/Import",
                  desc: "Your data belongs to you. Export your full history to CSV anytime.",
                  icon: "📥",
                },
                {
                  title: "Privacy First",
                  desc: "All your data stays locally on your device. No account required.",
                  icon: "🔒",
                },
                {
                  title: "Offline Ready",
                  desc: "Track your habits anywhere, even without an internet connection.",
                  icon: "⚡",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start p-6 bg-surface-secondary/30 rounded-2xl hover:bg-surface-secondary transition-colors h-full"
                >
                  <span className="text-3xl mb-4 bg-surface w-12 h-12 flex items-center justify-center rounded-xl shadow-inner border border-white/5">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-lg text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <Pebble
            color="var(--color-blob-1)"
            className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initialRotation={0}
            speed={0.05}
          />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-text tracking-tight">
              Ready to build <br /> better habits?
            </h2>
            <p className="text-xl text-text-secondary mb-10 max-w-xl mx-auto">
              Join the community and start your journey with Sona today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 rounded-full bg-text text-white font-bold text-xl hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.74 2.4.29 4.18 1.45 4.93 2.5-4.12 2.5-3.41 7.56 1.3 9.46zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download on App Store
              </button>
            </div>
            <p className="mt-8 text-sm text-text-tertiary">
              Free to start. No credit card required.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-background-secondary border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-80">
            <span className="font-bold text-xl tracking-tight text-text">
              sona
            </span>
          </div>
          <div className="flex gap-8 text-sm text-text-secondary">
            <a href="#" className="hover:text-text">
              Privacy
            </a>
            <a href="#" className="hover:text-text">
              Terms
            </a>
            <a href="#" className="hover:text-text">
              Twitter
            </a>
          </div>
          <p className="text-text-tertiary text-sm">© 2025 Sona.</p>
        </div>
      </footer>
    </div>
  );
}
