"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Shield } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const projectTech = [
  ["Kotlin", "Java", "Spring Boot", "PostgreSQL", "Docker"],
  [
    "Kotlin",
    "Spring Boot",
    "JUnit",
    "Mockito",
    "MockK",
    "PostgreSQL",
    "Docker",
    "Keycloak",
  ],
  ["Kotlin", "Java", "Spring Boot", "PostgreSQL"],
];

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title={t.experience.heading}
          subtitle={t.experience.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Briefcase size={26} />
          </div>
          <div>
            <h3 className="text-xl font-bold">{t.experience.company}</h3>
            <p className="text-sm text-muted-foreground">
              {t.experience.role} &middot; {t.experience.period}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 flex items-center gap-2 rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-xs text-muted-foreground"
        >
          <Shield size={14} className="shrink-0 text-primary" />
          {t.experience.nda}
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] top-0 h-full w-px bg-border/50" />

          <div className="flex flex-col gap-12">
            {t.experience.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative pl-16"
              >
                <div className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

                <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-primary/20 sm:p-8">
                  <h4 className="mb-2 text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {projectTech[i].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-2">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
