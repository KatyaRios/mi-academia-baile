"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  training: [
    { label: "Clases", href: "/clases" },
    { label: "Membresías", href: "/membresias" },
    { label: "Horarios", href: "/horarios" },
  ],
  academy: [
    { label: "Estudio", href: "/estudio" },
    { label: "Contacto", href: "/contacto" },
    { label: "Privacidad", href: "/privacidad" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-black tracking-tighter">
                XIRA<span className="text-primary">DANCE</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              En XIRA Dance Studio, el movimiento nace desde la esencia. Creemos
              en el entrenamiento constante, la expresión libre y el crecimiento
              personal a través de la danza.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Training Links */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
              Training
            </h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
              Academy
            </h4>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-2">
            <a
              href="mailto:studio@xiradance.com"
              className="text-xl md:text-2xl font-black text-primary hover:underline"
            >
              STUDIO@XIRADANCE.COM
            </a>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Iquitos, Perú
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +51 928 379 380
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <p>© 2026 XIRA Dance. Pure Energy. No Compromise.</p>
          <p>Design & Creative: Global Studio Network</p>
        </div>
      </div>
    </footer>
  );
}
