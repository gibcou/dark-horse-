import React from "react";
import { motion } from "framer-motion";

const vendors = [
  "AEV",
  "Alu-Cab",
  "ARB",
  "B&W Trailer Hitches",
  "Baja Designs",
  "BAK",
  "BDS Suspension",
  "C4 Fabrication",
  "Carli Suspension",
  "CBI Off Road",
  "Dakota Lithium",
  "Decked",
  "Diode Dynamics",
  "Dometic",
  "Extang",
  "Fab Fours",
  "Factor 55",
  "FOX",
  "Front Runner",
  "Goose Gear",
  "Husky Liners",
  "ICON",
  "King Shocks",
  "LEER",
  "Maxtrax",
  "Method Race Wheels",
  "Old Man Emu",
  "Overland Explorer Vehicles",
];

export default function Vendors() {
  return (
    <section id="vendors" className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
            // Approved Vendors
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
            Parts we trust
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground leading-relaxed text-sm">
            Our commitment to excellence is reflected in the brands we carry — only the
            finest products and parts make it onto your rig.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {vendors.map((v, i) => (
            <motion.span
              key={v}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="px-5 py-3 border border-border text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
            >
              {v}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}