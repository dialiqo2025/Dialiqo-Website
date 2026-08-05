"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, PhoneCall, Mic, Cloud, Bot, Shield, Zap, Globe } from 'lucide-react';
import { ServiceItem } from '../../types';

interface BentoGridProps {
  services: ServiceItem[];
  onSelectService: (serviceSlug: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Cpu: <Cpu className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
  Mic: <Mic className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Cloud: <Cloud className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
  Bot: <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Shield: <Shield className="w-6 h-6 text-blue-500" />,
  Globe: <Globe className="w-6 h-6 text-indigo-500" />
};

export const BentoGrid: React.FC<BentoGridProps> = ({ services, onSelectService }) => {
  const featured = services.filter(s => s.featured).slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featured.map((service, index) => {
        const isLarge = index === 0 || index === 2;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectService(service.slug)}
            className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-8 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all cursor-pointer ${
              isLarge ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            {/* Subtle Gradient Glow Effect */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-inner">
                    {iconMap[service.iconName] || <Zap className="w-6 h-6 text-blue-600" />}
                  </div>
                  {service.badge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-600" />
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  {service.shortDesc}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-2">
                {service.techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {service.techStack.length > 4 && (
                  <span className="text-xs font-medium px-2 py-1 text-slate-400">
                    +{service.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
