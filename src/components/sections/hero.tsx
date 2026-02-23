"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGradientBg } from "@/components/ui/animated-gradient-bg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGradientBg />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 30%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 30%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-block rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
          >
            Available for opportunities
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Stanislav{" "}
          <span className="gradient-text">Lisovoy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
        >
          Backend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground/80"
        >
          Building robust, scalable backend systems with clean architecture.
          Turning complex requirements into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="group gap-2 px-8">
            <a href="#contact">
              <Mail size={16} />
              Contact Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 px-8">
            <a href="#experience">
              <ArrowDown size={16} />
              View Experience
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border/50 pt-2"
        >
          <motion.div className="h-1.5 w-1 rounded-full bg-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
