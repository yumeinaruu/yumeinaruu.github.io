"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      "Kotlin",
      "Java",
      "Python",
      "Spring Boot",
      "Django",
      "REST API",
      "gRPC",
      "Feign",
    ],
  },
  {
    title: "DevOps",
    skills: ["Docker", "CI/CD", "Linux", "Nginx", "Git", "GitHub Actions"],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "SQL",
      "Database Design",
    ],
  },
  {
    title: "Architecture & Principles",
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
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
                {cat.title}
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
