import React, { useRef } from "react";
import { Award, Hammer, Clock, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import Reveal3D from "@/components/motion/Reveal3D";

const WORKSHOP_IMG = "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/Shop+Front+DHO+gradient-2304w.jpg";

const points = [
  {
    icon: Hammer,
    title: "Custom Fabrication",
    desc: "A one-of-a-kind fab facility for classic, custom, and modern trucks - if it doesn't exist, we build it.",
  },
  {
    icon: ShieldCheck,
    title: "Function First",
    desc: "We spec parts that work in the real world, not just in a catalog. Every install is done right, not fast.",
  },
  {
    icon: Award,
    title: "Premium Vendors",
    desc: "Only the finest products and parts make it onto your rig. We stand behind every brand we carry.",
  },
  {
    icon: Clock,
    title: "Walk-Ins Welcome",
    desc: "No appointment needed. Stop by the shop Monday through Thursday and we'll walk your truck with you.",
  },
];

export default function WhyUs() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="why" className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal3D y={48} rotateX={5} className="relative order-2 lg:order-1">
            <div ref={imgRef} className="relative aspect-[4/3] overflow-hidden border border-border">
              <motion.div className="absolute inset-0" style={{ y: imgY, scale: 1.15 }}>
                <Image
                  src={WORKSHOP_IMG}
                  alt="The Dark Horse Outfitters shop in Bozeman"
                  fittingType="fill"
                  className="w-full h-full"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 sm:-right-5 bg-primary text-primary-foreground px-5 py-4">
              <p className="font-display text-2xl font-black leading-none">MON-THU</p>
              <p className="text-[10px] font-mono uppercase tracking-widest mt-1 opacity-80">
                7:00 AM - 6:00 PM
              </p>
            </div>
          </Reveal3D>

          <Reveal3D delay={0.12} y={48} rotateX={5} className="order-1 lg:order-2">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              // The Shop
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground mb-5">
              A build shop, not a parts counter.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dark Horse Outfitters is a full custom vehicle facility with an affordable
              array of transformation services. We're gearheads who actually use the
              trucks we build - so we know what holds up and what doesn't.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {points.map((p) => (
                <div key={p.title} className="bg-card p-5">
                  <p.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}