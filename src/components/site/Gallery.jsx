import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal3D from "@/components/motion/Reveal3D";
import TiltCard from "@/components/motion/TiltCard";

const builds = [
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-51-2304w.jpg",
    tag: "Overlanding Gear",
    title: "Oh the places you can go",
    spec: "Racks · RTT · Awnings · Power systems",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/320019781_1843382722662093_8178820197650971057_n-40165142-1920w.jpg",
    tag: "Snowplows",
    title: "Show winter who is the boss",
    spec: "Commercial & personal plow installs",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-29-1920w.jpg",
    tag: "Truck Toppers",
    title: "We have you covered",
    spec: "Five premium brands · cab-high to full-height",
  },
  {
    img: "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/outfitters-54-1920w.jpg",
    tag: "Bumpers",
    title: "Factory parts don't cut it",
    spec: "Heavy-duty front & rear bumpers · sliders · skids",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              // The Field Log
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Recent Work
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground leading-relaxed">
              Every truck that leaves the shop is built to earn its keep. A look at
              builds we've shipped out the door.
            </p>
            <Link
              to="/work"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-primary hover:opacity-80 transition-opacity"
            >
              View all builds
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {builds.map((b, i) => (
            <Reveal3D
              key={b.title}
              delay={(i % 2) * 0.08}
              y={48}
              rotateX={6}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
            <TiltCard className="group relative overflow-hidden border border-border h-full">
              <div className={`relative ${i === 0 ? "aspect-[2/1] sm:aspect-[3/1.1]" : "aspect-[4/3]"}`}>
                <Image
                  src={b.img}
                  alt={b.title}
                  fittingType="fill"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                    {b.tag}
                  </span>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {b.spec}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 flex items-center justify-center w-11 h-11 border border-border bg-background/60 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label={`Inquire about ${b.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </TiltCard>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}