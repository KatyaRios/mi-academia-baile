"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Waves, Flame, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    icon: Zap,
    name: "START",
    level: "Nivel Inicial",
    description:
      "Clase diseñada para quienes recién comienzan o quieren reforzar bases. Se trabaja coordinación, musicalidad y confianza corporal.",
    featured: false,
  },
  {
    icon: Waves,
    name: "FLOW",
    level: "Nivel Intermedio",
    description:
      "Para bailarines que ya dominan lo básico y buscan fluidez. Se profundiza en técnica, estilo y coreografías complejas.",
    featured: false,
  },
  {
    icon: Flame,
    name: "IMPACT",
    level: "Nivel Avanzado",
    description:
      "Entrenamiento intenso enfocado en potencia, precisión y presencia escénica. Ideal para llevar tu danza a un nivel profesional.",
    featured: false,
  },
  {
    icon: Crown,
    name: "TEAM",
    level: "Élite / Performance",
    description:
      "Grupo de alto rendimiento para competencias y proyectos coreográficos. Requiere audición y compromiso absoluto.",
    featured: true,
  },
];

export function ProgramsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
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
            Nuestros niveles
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance">
            Elige tu <span className="text-primary">desafío</span>
          </h2>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "h-full bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border group relative overflow-hidden",
                  program.featured && "border-primary border-2"
                )}
              >
                {program.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Audición
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-black">
                    XIRA <span className="text-primary">{program.name}</span>
                  </CardTitle>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {program.level}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
