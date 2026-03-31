"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Instagram, ArrowUpRight } from "lucide-react";

export function InstructorsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Team XIRA
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance">
            Nuestros <span className="text-primary">instructores</span>
          </h2>
        </motion.div>

        {/* Instructor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-0 bg-card rounded-3xl overflow-hidden border border-border">
            {/* Left - Image & Info */}
            <div className="relative p-8 lg:p-12">
              {/* Image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                {/* Placeholder for instructor image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-black text-primary">K</span>
                    </div>
                  </div>
                </div>
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-lg font-black">Katya Rios</h3>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                      Co-fundadora y Coreógrafa Principal
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  Aceptando sesiones privadas
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  Con más de 5 años de experiencia profesional, ha establecido el
                  estándar para la danza urbana en la región. Su enfoque combina
                  técnica rigurosa con la libertad de movimiento de{" "}
                  <strong className="text-foreground">XIRA FLOW</strong>.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    @katyarios
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full gap-2 text-muted-foreground"
                  >
                    Ver perfil
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right - Video */}
            <div className="bg-secondary/50 p-8 lg:p-12 flex flex-col">
              {/* Main video */}
              <div className="relative flex-1 min-h-[300px] rounded-2xl overflow-hidden bg-background border border-border mb-6 group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Advanced Urban Masterclass
                  </p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`aspect-video rounded-lg bg-background border-2 transition-colors cursor-pointer ${
                      i === 1
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
