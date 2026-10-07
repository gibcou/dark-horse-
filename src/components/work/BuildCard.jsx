import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import TiltCard from "@/components/motion/TiltCard";

export default function BuildCard({ build }) {
  return (
    <TiltCard className="group relative overflow-hidden border border-border h-full">
      <div className="relative aspect-[4/3]">
        <Image
          src={build.img}
          alt={build.title}
          fittingType="fill"
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
            {build.tag}
          </span>
          <h3 className="mt-1 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
            {build.title}
          </h3>
          <p className="mt-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {build.spec}
          </p>
        </div>
        <Link
          to="/contact"
          aria-label={`Plan a build like this`}
          className="shrink-0 flex items-center justify-center w-11 h-11 border border-border bg-background/60 backdrop-blur text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </TiltCard>
  );
}