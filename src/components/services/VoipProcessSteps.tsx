"use client";

import { motion } from "motion/react";
import { typo } from "@/lib/typography";

interface VoipProcessStepsProps {
  steps: readonly string[];
  descriptions?: readonly string[];
  variant?: "cards" | "circles";
}

export function VoipProcessSteps({
  steps,
  descriptions,
  variant = "cards",
}: VoipProcessStepsProps) {
  const isCircles = variant === "circles";

  const colClass =
    steps.length >= 6
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";

  return (
    <ol className={`relative grid ${colClass} gap-6 list-none p-0 m-0`}>
      {isCircles && (
        <div
          className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-slate-200 dark:bg-slate-800"
          aria-hidden="true"
        />
      )}
      {steps.map((step, i) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, y: 28, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.45,
            delay: i * 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={
            isCircles
              ? "relative text-center px-2"
              : "relative text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          }
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.4,
              delay: i * 0.18 + 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold"
            aria-hidden="true"
          >
            {i + 1}
          </motion.span>
          <h3 className={`${typo.cardTitle} text-slate-900 dark:text-white`}>
            {step}
          </h3>
          {descriptions?.[i] && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {descriptions[i]}
            </p>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
