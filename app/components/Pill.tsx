"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Pill component matching the app's rounded rectangle shapes.
 * Updated to match the actual app's color scheme:
 * - Blue: for habits like "Drink Water" (#4a6fa5)
 * - Green: for habits like "Go For a Walk" (#4a9a7c)
 * - Amber: warm accent color
 * - Cream: light mode backgrounds
 */

interface PillProps {
  className?: string;
  variant?: "empty" | "filled" | "faded" | "check";
  color?: "blue" | "green" | "amber" | "muted" | "cream";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  animate?: boolean;
  delay?: number;
  opacity?: number;
}

const sizeMap = {
  xs: "w-6 h-6 rounded-lg",
  sm: "w-8 h-8 rounded-xl",
  md: "w-12 h-12 rounded-2xl",
  lg: "w-16 h-16 rounded-[1.25rem]",
  xl: "w-24 h-24 rounded-[1.75rem]",
  "2xl": "w-32 h-32 rounded-[2.5rem]",
};

const colorMap = {
  blue: {
    empty: "bg-[#4a6fa5]/20",
    faded: "bg-[#4a6fa5]/40",
    filled: "bg-[#4a6fa5] shadow-lg shadow-[#4a6fa5]/25",
    check: "bg-[#4a9a7c] shadow-lg shadow-[#4a9a7c]/30",
  },
  green: {
    empty: "bg-[#4a9a7c]/20",
    faded: "bg-[#4a9a7c]/40",
    filled: "bg-[#4a9a7c] shadow-lg shadow-[#4a9a7c]/25",
    check: "bg-[#4a9a7c] shadow-lg shadow-[#4a9a7c]/30",
  },
  amber: {
    empty: "bg-amber-500/20",
    faded: "bg-amber-500/40",
    filled: "bg-amber-500 shadow-lg shadow-amber-500/25",
    check: "bg-[#4a9a7c] shadow-lg shadow-[#4a9a7c]/30",
  },
  muted: {
    empty: "bg-[#2d2a26]/10",
    faded: "bg-[#2d2a26]/20",
    filled: "bg-[#2d2a26]/30",
    check: "bg-[#4a9a7c] shadow-lg shadow-[#4a9a7c]/30",
  },
  cream: {
    empty: "bg-[#f5f0e8]/60 border border-[#e5ddd0]",
    faded: "bg-[#f5f0e8]/80",
    filled: "bg-[#f5f0e8] shadow-md shadow-amber-900/5",
    check: "bg-[#4a9a7c] shadow-lg shadow-[#4a9a7c]/30",
  },
};

function CheckIcon() {
  return (
    <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l5 5L20 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pill({
  className = "",
  variant = "empty",
  color = "muted",
  size = "md",
  animate = false,
  delay = 0,
  opacity,
}: PillProps) {
  const baseClasses = `${sizeMap[size]} ${colorMap[color][variant]} flex items-center justify-center transition-all ${className}`;
  const style = opacity !== undefined ? { opacity } : undefined;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: opacity ?? 1, scale: 1 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={baseClasses}
        style={style}
      >
        {variant === "check" && <CheckIcon />}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} style={style}>
      {variant === "check" && <CheckIcon />}
    </div>
  );
}

/**
 * Parallax Pill - moves based on scroll position
 * Now with warm organic colors matching the app
 */
export function ParallaxPill({
  className = "",
  variant = "filled",
  color = "blue",
  size = "lg",
  speed = 0.5,
  rotate = 0,
  opacity,
}: PillProps & { speed?: number; rotate?: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 200]);
  const rotation = useTransform(scrollY, [0, 2000], [rotate, rotate + 30]);

  const parallaxSizes = {
    xs: "w-8 h-8 rounded-xl",
    sm: "w-12 h-12 rounded-2xl",
    md: "w-20 h-20 rounded-[1.5rem]",
    lg: "w-28 h-28 rounded-[2rem]",
    xl: "w-40 h-40 rounded-[2.5rem]",
    "2xl": "w-56 h-56 rounded-[3rem]",
  };

  return (
    <motion.div
      style={{ y, rotate: rotation, opacity }}
      className={`${parallaxSizes[size]} ${colorMap[color][variant]} flex items-center justify-center ${className}`}
    >
      {variant === "check" && <CheckIcon />}
    </motion.div>
  );
}

/**
 * HabitGrid - Mimics the habit tracker grid from the app
 * Shows a month-like grid of pills with varying fill states
 */
export function HabitGrid({
  className = "",
  color = "blue",
  rows = 3,
  cols = 7,
  pattern,
}: {
  className?: string;
  color?: "blue" | "green" | "amber";
  rows?: number;
  cols?: number;
  pattern?: number[][]; // 0 = empty, 1 = faded, 2 = filled
}) {
  // Default pattern mimicking app screenshot
  const defaultPattern = [
    [2, 2, 1, 1, 2, 2, 1, 1, 2, 2],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 2, 2, 1, 1, 2, 2, 2, 2],
  ];

  const grid = pattern || defaultPattern;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {grid.slice(0, rows).map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {row.slice(0, cols).map((cell, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (rowIndex * cols + colIndex) * 0.02 }}
            >
              <Pill
                size="sm"
                color={color}
                variant={cell === 0 ? "empty" : cell === 1 ? "faded" : "filled"}
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * CircleProgress - Mimics the circular progress rings from the app's calendar view
 */
export function CircleProgress({
  progress = 75,
  size = 40,
  strokeWidth = 3,
  color = "#4a6fa5",
  className = "",
  children,
}: {
  progress?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * PillRow - simplified row of pills
 */
export function PillRow({
  className = "",
  filledCount = 2,
  totalCount = 7,
  showCheck = true,
  size = "md",
  gap = "gap-2",
  color = "blue",
}: {
  className?: string;
  filledCount?: number;
  totalCount?: number;
  showCheck?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  gap?: string;
  color?: "blue" | "green" | "amber";
}) {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {Array.from({ length: totalCount }).map((_, i) => {
        const isFilled = i >= totalCount - filledCount;
        const isCheck = showCheck && i === totalCount - 1;

        return (
          <Pill
            key={i}
            size={size}
            variant={isCheck ? "check" : isFilled ? "filled" : "empty"}
            color={isFilled ? color : "muted"}
            animate
            delay={i * 0.08}
          />
        );
      })}
    </div>
  );
}
