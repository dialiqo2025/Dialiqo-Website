"use client";
import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  centered = true,
  className = '',
  action
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/60 rounded-full border border-blue-200/60 dark:border-blue-800/60"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {action && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          {action}
        </motion.div>
      )}
    </div>
  );
};
