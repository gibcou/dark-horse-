import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/opt/Power_Wagon_2019-25-b56342ae-1920w.jpg";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <Image
          src={HERO_IMG}
          alt="Dark Horse Outfitters truck with topper in Montana aspens"
          fittingType="fill"
          className="w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: fade, y: lift }}
        className="relative w-full mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24 pt-32"
      >
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-primary/40 bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
              Bozeman, Montana
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-foreground">
            Built for the
            <br />
            <span className="text-primary">backcountry.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Montana's premier truck outfitting business. Lifts, armor, plows, toppers,
            lighting and off-road accessories — your place in the valley to outfit your
            rig right.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Plan Your Build
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground font-bold uppercase tracking-wide text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            104 Village Center Ln · Bozeman, MT 59718
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.span
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}