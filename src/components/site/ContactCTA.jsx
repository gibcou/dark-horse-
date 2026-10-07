import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Reveal3D from "@/components/motion/Reveal3D";

export default function ContactCTA() {
  return (
    <section className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <Reveal3D y={64} rotateX={6} className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
          // Ready when you are
        </p>
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-foreground max-w-3xl mx-auto leading-[0.95]">
          Let's build
          <span className="text-primary"> your rig.</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground leading-relaxed">
          Tell us about your truck and what you want it to do. We'll put together a build
          plan and a quote - no pressure, no jargon.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
          >
            Plan Your Build
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:4065876103"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-bold uppercase tracking-wide text-sm hover:border-primary hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            406-587-6103
          </a>
        </div>
      </Reveal3D>
    </section>
  );
}