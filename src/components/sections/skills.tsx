"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/lib/locale-context";

const skillData = [
  {
    key: "backend" as const,
    skills: [
      "Kotlin",
      "Java",
      "Spring Boot",
      "REST API",
      "gRPC",
      "Feign",
      "Kafka",
      "JUnit",
      "Mockito",
      "MockK",
    ],
  },
  {
    key: "devops" as const,
    skills: ["Docker", "Linux", "Nginx", "Git", "GitLab CI/CD"],
  },
  {
    key: "databases" as const,
    skills: ["PostgreSQL", "Redis", "SQL", "Database Design"],
  },
  {
    key: "architecture" as const,
    skills: [
      "Microservices",
      "Clean Architecture",
      "SOLID",
      "Design Patterns",
      "REST",
      "TDD",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t.skills.heading}
          subtitle={t.skills.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillData.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
                {t.skills.categories[cat.key]}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2.5"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-default rounded-lg border border-border/50 bg-secondary/60 px-3.5 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
