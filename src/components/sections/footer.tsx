"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="px-6 pb-10 pt-4">
      <Separator className="mx-auto mb-10 max-w-6xl opacity-50" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <a
          href="https://github.com/yumeinaruu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
      </motion.div>
    </footer>
  );
}
