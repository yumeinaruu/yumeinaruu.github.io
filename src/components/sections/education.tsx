"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GraduationCap } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function Education() {
  const { t } = useLocale();

  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title={t.education.heading}
          subtitle={t.education.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="glass mx-auto max-w-2xl rounded-2xl p-8 transition-colors duration-300 hover:border-primary/20"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <GraduationCap size={26} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{t.education.university}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.education.degree}
              </p>
              <p className="mt-3 inline-block rounded-lg bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                {t.education.period}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
