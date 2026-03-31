"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, HelpCircle, MessageCircle } from "lucide-react";

export function SupportSection() {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        {/* FAQ Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/faq"
            className="group relative flex items-center justify-center min-h-[300px] md:min-h-[400px] bg-primary text-primary-foreground overflow-hidden transition-all hover:opacity-90"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
              <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full" />
            </div>

            <div className="relative text-center px-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <HelpCircle className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  ¿Alguna duda?
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter flex items-center gap-4">
                FAQ
                <ArrowUpRight className="h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
            </div>
          </Link>
        </motion.div>

        {/* Contact Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/contacto"
            className="group relative flex items-center justify-center min-h-[300px] md:min-h-[400px] bg-foreground text-background overflow-hidden transition-all hover:opacity-90"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 right-20 w-32 h-32 border border-background rounded-full" />
              <div className="absolute bottom-20 left-20 w-48 h-48 border border-background rounded-full" />
            </div>

            <div className="relative text-center px-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  ¡Hablemos!
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter flex items-center gap-4">
                CONTACT
                <ArrowUpRight className="h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
