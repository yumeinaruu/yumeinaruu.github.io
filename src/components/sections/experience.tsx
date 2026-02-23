"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Shield } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Securities Trading Platform",
    description:
      "High-reliability platform for securities trading with real-time market data processing and order management.",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL", "Docker", "FIX/FAST"],
    highlights: [
      "FIX/FAST protocol integration for market data",
      "REST API development for trading operations",
      "System architecture refactoring for scalability",
    ],
  },
  {
    title: "Auto-Secured Loans Platform",
    description:
      "End-to-end loan processing platform with automated document generation and multi-system integration.",
    tech: [
      "Kotlin",
      "Spring Boot",
      "Django",
      "PostgreSQL",
      "Keycloak",
      "Feign",
    ],
    highlights: [
      "Bitrix24 CRM integration",
      "1C accounting system via SFTP",
      "Document generation pipeline (.odt to .pdf)",
      "Microservices architecture with Feign clients",
      "Keycloak-based authentication & authorization",
    ],
  },
  {
    title: "Library Automation System",
    description:
      "Full-featured library management system with advanced search capabilities and administrative tools.",
    tech: ["Django", "PostgreSQL", "Elasticsearch"],
    highlights: [
      "Boolean search engine with Elasticsearch",
      "Administrative dashboard for library management",
      "Optimized full-text search across catalog",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and key projects"
        />

        {/* Company header */}
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
            <h3 className="text-xl font-bold">Krainet</h3>
            <p className="text-sm text-muted-foreground">
              Backend Developer &middot; July 2024 &ndash; Present
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
          Projects under NDA — descriptions reflect general scope only
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 h-full w-px bg-border/50" />

          <div className="flex flex-col gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

                <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-primary/20 sm:p-8">
                  <h4 className="mb-2 text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
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
