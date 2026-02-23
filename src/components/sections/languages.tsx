"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Globe } from "lucide-react";

const languages = [
  { name: "English", level: "B2", percent: 70 },
  { name: "Russian", level: "Native", percent: 100 },
  { name: "Belarusian", level: "Native", percent: 100 },
  { name: "Japanese", level: "N5", percent: 20 },
];

export function Languages() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Languages" subtitle="Communication skills" />

        <div className="mx-auto grid max-w-2xl gap-5">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass group rounded-xl px-6 py-5 transition-colors duration-300 hover:border-primary/20"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe
                    size={16}
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                  />
                  <span className="font-medium">{lang.name}</span>
                </div>
                <span className="text-sm font-medium text-primary">
                  {lang.level}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
