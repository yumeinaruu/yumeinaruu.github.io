"use client";

import {motion} from "framer-motion";
import {SectionHeading} from "@/components/ui/section-heading";
import {Badge} from "@/components/ui/badge";
import {Briefcase, Shield} from "lucide-react";

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
        tech: ["Kotlin", "Java", "Spring Boot", "PostgreSQL", "Docker"],
        highlights: [
            "Integrated FIX/FAST protocol for real-time market data streaming with BCSE",
            "Designed high-throughput REST APIs for order execution and trading workflows",
            "Refactored core modules to improve scalability, latency, and fault tolerance",
            "Improved system observability and reliability in a high-load trading environment",
        ],
    },
    {
        title: "Auto-Secured Loans Platform",
        description:
            "End-to-end loan processing platform with complex financial workflows, automated document generation and multi-system integration.",
        tech: [
            "Kotlin",
            "Spring Boot",
            "JUnit",
            "Mockito",
            "MockK",
            "PostgreSQL",
            "Docker",
            "Keycloak",
        ],
        highlights: [
            "Architected multi-system integrations (Bitrix24 CRM, 1C via SFTP/SMB)",
            "Designed automated document generation pipeline (.odt → .pdf)",
            "Built microservices communication layer using REST and Kafka",
            "Improved deployment workflows and environment stability",
            "Engineered comprehensive unit and integration test suites (80%+ coverage)",
            "Applied advanced Mockito & MockK techniques (argument captors, slots, behavioral verification) to ensure business logic reliability and edge-case resilience",
            "Developed modular annuity payment calculation engine supporting multiple configurable calculators",
            "Built extensible calculator framework allowing dynamic strategy resolution via factory-based orchestration",
            "Encapsulated domain logic using Strategy, Composite, and Factory patterns for flexible financial calculations",
        ],
    },
    {
        title: "Car Leasing",
        description:
            "Enterprise-grade leasing platform with state-driven business processes and deep integration with Bitrix24 CRM for end-to-end process automation.",
        tech: ["Kotlin", "Java", "Spring Boot", "PostgreSQL"],
        highlights: [
            "Designed and maintained deep bidirectional integration with Bitrix24 CRM, synchronizing leads, contacts, and deal lifecycle states",
            "Designed and implemented complex business workflows using Spring StateMachine (states, guards, actions) to model leasing lifecycle processes",
            "Encapsulated domain logic using Strategy, Composite, and Factory patterns for flexible financial calculations",
            "Achieved 80%+ test coverage with comprehensive unit and integration testing",
            "Applied advanced Mockito & MockK techniques (argument captors, slots, behavioral verification) to validate business state transitions and financial logic",
            "Updated app from Spring Boot 2.7 to 3.5",
            "Designed and implemented advanced logging pattern using BeanPostProcessor to create Proxies for put MDC",
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
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{duration: 0.5}}
                    className="mb-12 flex items-center gap-4"
                >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Briefcase size={26}/>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">LLC Krainet</h3>
                        <p className="text-sm text-muted-foreground">
                            Backend Developer &middot; July 2024 &ndash; Present
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className="mb-10 flex items-center gap-2 rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-xs text-muted-foreground"
                >
                    <Shield size={14} className="shrink-0 text-primary"/>
                    Projects under NDA — descriptions reflect general scope only
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[23px] top-0 h-full w-px bg-border/50"/>

                    <div className="flex flex-col gap-12">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, margin: "-60px"}}
                                transition={{duration: 0.5, delay: i * 0.15}}
                                className="group relative pl-16"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-3 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary"/>

                                <div
                                    className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-primary/20 sm:p-8">
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
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"/>
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
