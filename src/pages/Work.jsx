import React from "react";
import Navbar from "@/components/site/Navbar";
import SiteFooter from "@/components/site/SiteFooter";
import ContactCTA from "@/components/site/ContactCTA";
import BuildCard from "@/components/work/BuildCard";
import { Image } from "@/components/ui/image";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Reveal3D from "@/components/motion/Reveal3D";

const HERO_IMG =
  "https://base44.app/api/apps/6ac67593c5648ab349c9154b/files/mp/public/6ac67593c5648ab349c9154b/118355f49_dho-fab.jpg";

const featured = {
  img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/Power_Wagon_2019-25-b56342ae-1920w.jpg",
  tag: "Truck Toppers",
  title: "Ram Power Wagon + SnugTop",
  desc: "A Power Wagon that still works hard Monday through Thursday and plays hard the rest of the week. SnugTop topper fitted, wired, and sealed in the shop.",
  specs: ["SnugTop topper", "Bed mat", "Daily driver ready"],
};

const builds = [
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/320019781_1843382722662093_8178820197650971057_n-40165142-1920w.jpg",
    tag: "Snowplows",
    title: "F-350 + BOSS XT",
    spec: "Commercial plow · Wiring · Aimed & balanced",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-29-1920w.jpg",
    tag: "Truck Toppers",
    title: "Ranger FX4 + SnugTop",
    spec: "Cab-high topper · Crossbars",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-54-1920w.jpg",
    tag: "Bumpers",
    title: "Ranch Hand Grille Guard",
    spec: "HD front protection · Built to take a hit",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-51-2304w.jpg",
    tag: "Overlanding Gear",
    title: "Tundra Overland Rig",
    spec: "Rack · Crossbars · Tow setup",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/324126990_3423517484572390_3263523034454028036_n-652w.jpg",
    tag: "Snowplows",
    title: "Silverado + SNO-POWER",
    spec: "HD plow · Markers · Mount & wiring",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-6-652w.jpg",
    tag: "Snowplows",
    title: "ATV + BOSS Plow",
    spec: "Polaris · BOSS blade · Mount",
  },
];

const shopFloor = [
  {
    img: "https://base44.app/api/apps/6ac67593c5648ab349c9154b/files/mp/public/6ac67593c5648ab349c9154b/2baf971d1_dho-install.jpg",
    title: "Install day",
    desc: "A fresh topper getting fitted, sealed, and wired in the shop.",
  },
  {
    img: "https://base44.app/api/apps/6ac67593c5648ab349c9154b/files/mp/public/6ac67593c5648ab349c9154b/118355f49_dho-fab.jpg",
    title: "Custom fab",
    desc: "Suspension and fabrication work in progress on the lift.",
  },
  {
    img: "https://base44.app/api/apps/6ac67593c5648ab349c9154b/files/mp/public/6ac67593c5648ab349c9154b/8404000fd_dho-crew.jpg",
    title: "The crew",
    desc: "The team behind every build that leaves the shop.",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMG}
              alt="Custom fabrication work in the Dark Horse Outfitters shop"
              fittingType="fill"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mx-auto max-w-7xl px-5 sm:px-8 pb-12 pt-40"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              // The Field Log
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-foreground leading-[0.95]">
              Recent <span className="text-primary">builds.</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              A look at the rigs we've outfitted — from install day on the lift to the
              day they drive out the door.
            </p>
          </motion.div>
        </section>

        {/* Featured build */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
            <Reveal3D y={56} rotateX={5}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fittingType="fill"
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
                  // Featured Build
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-[0.95]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                  {featured.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.specs.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 border border-border text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </Reveal3D>
          </div>
        </section>

        {/* Build grid */}
        <section className="relative border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
                  // More From The Shop
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                  Builds we've shipped
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                Plows, toppers, armor, and overland setups — every one installed in-house
                with parts we'd run ourselves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {builds.map((b, i) => (
                <Reveal3D key={b.title} delay={(i % 3) * 0.07} y={40} rotateX={6} className="h-full">
                  <BuildCard build={b} />
                </Reveal3D>
              ))}
            </div>
          </div>
        </section>

        {/* From the shop floor */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
                  // Behind The Scenes
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
                  From the shop floor
                </h2>
              </div>
              <a
                href="https://www.instagram.com/darkhorsemt/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                More on Instagram @darkhorsemt
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {shopFloor.map((s, i) => (
                <Reveal3D key={s.title} delay={(i % 3) * 0.07} y={40} rotateX={6} className="h-full">
                <div className="group border border-border bg-card h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fittingType="fill"
                      className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
                </Reveal3D>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}