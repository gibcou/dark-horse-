import React from "react";
import { Link } from "react-router-dom";
import {
  Mountain,
  Shield,
  Package,
  Snowflake,
  Lightbulb,
  Tent,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import Reveal3D from "@/components/motion/Reveal3D";

const services = [
  {
    icon: Mountain,
    code: "DHO-01",
    title: "Lifts & Suspension",
    desc: "Stage kits, coilovers, and leaf-packs tuned for Montana terrain and a ride that's smooth on the highway and capable off it.",
  },
  {
    icon: Shield,
    code: "DHO-02",
    title: "Armor & Bumpers",
    desc: "Heavy-duty front and rear bumpers, sliders, and skid plates that protect your rig when factory parts won't cut it.",
  },
  {
    icon: Package,
    code: "DHO-03",
    title: "Truck Toppers",
    desc: "Five premium brands of truck toppers and tonneaus — cab-high, mid-rise, and full-height to match how you work and play.",
  },
  {
    icon: Snowflake,
    code: "DHO-04",
    title: "Snowplows",
    desc: "Commercial and personal plow installs wired, mounted, and balanced so winter never catches you off guard.",
  },
  {
    icon: Lightbulb,
    code: "DHO-05",
    title: "Lighting",
    desc: "Light bars, pods, and scene lighting from the brands that matter — aimed, fused, and switched the right way.",
  },
  {
    icon: Tent,
    code: "DHO-06",
    title: "Overland Gear",
    desc: "Roof-top tents, racks, awnings, and power systems for the places the pavement stops and the map gets thin.",
  },
  {
    icon: Wrench,
    code: "DHO-07",
    title: "Off-Road Accessories",
    desc: "Winches, recovery gear, fender flares, wheels and tires — the details that turn a truck into a build.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              // The Armory
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Services
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Your place in the valley for premier vehicle parts and accessories. We outfit
            your truck and bring your ideas to life — function first, always.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <Reveal3D key={s.code} delay={(i % 3) * 0.08} y={40} rotateX={8} className="h-full">
            <div
              className="group relative bg-card p-7 sm:p-8 flex flex-col transition-colors hover:bg-secondary h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="flex items-center justify-center w-12 h-12 border border-border text-primary group-hover:border-primary transition-colors">
                  <s.icon className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {s.code}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {s.desc}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Get a quote
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            </Reveal3D>
          ))}

          <Reveal3D delay={0.15} y={40} rotateX={8} className="h-full">
          <Link
            to="/contact"
            className="group relative bg-primary text-primary-foreground p-7 sm:p-8 flex flex-col justify-between min-h-[180px] h-full hover:opacity-95 transition-opacity"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">
              DHO-00
            </span>
            <div>
              <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-2">
                Full Custom Build
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Not sure where to start? Tell us your rig and your goals — we'll spec the
                whole build.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest">
                Start the conversation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}