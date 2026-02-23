"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Globe } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const percents = [70, 100, 100, 20];

export function Languages() {
  const { t } = useLocale();

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title={t.languages.heading}
          subtitle={t.languages.subtitle}
        />

        <div className="mx-auto grid max-w-2xl gap-5">
          {t.languages.items.map((lang, i) => (
            <motion.div
              key={i}
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
                  whileInView={{ width: `${percents[i]}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
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
