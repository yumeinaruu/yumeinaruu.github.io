"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function Contact() {
  const { t } = useLocale();

  const contactItems = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "stas.lisavoy@icloud.com",
      href: "mailto:stas.lisavoy@icloud.com",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+375 29 745 06 89",
      href: "tel:+375297450689",
    },
  ];

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title={t.contact.heading}
          subtitle={t.contact.subtitle}
        />

        <div className="mx-auto grid max-w-lg gap-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass group flex items-center gap-5 rounded-2xl px-6 py-5 transition-colors duration-300 hover:border-primary/20"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <item.icon size={22} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-0.5 font-medium">{item.value}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button asChild size="lg" className="gap-2 px-10">
            <a href="mailto:stas.lisavoy@icloud.com">
              <Mail size={16} />
              {t.contact.sendEmail}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
