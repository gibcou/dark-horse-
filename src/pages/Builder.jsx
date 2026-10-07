import React, { useState } from "react";
import Navbar from "@/components/site/Navbar";
import SiteFooter from "@/components/site/SiteFooter";
import TruckScene from "@/components/builder/TruckScene";
import OptionPanel from "@/components/builder/OptionPanel";
import BuildSheetForm from "@/components/builder/BuildSheetForm";
import { DEFAULT_BUILD, estimate } from "@/lib/buildOptions";

export default function Builder() {
  const [build, setBuild] = useState(DEFAULT_BUILD);
  const total = estimate(build);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16 text-center">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">// 3D Builder</p>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              Build your <span className="text-primary">rig.</span>
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
              Spec it exactly how you want it — spin the rig in 3D, watch it change, then send the
              build sheet to the team and we'll follow up with a real quote.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
          <div className="relative h-[420px] sm:h-[560px] border border-border bg-[#232528] overflow-hidden">
            <TruckScene build={build} />
            <p className="absolute bottom-3 right-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80 pointer-events-none">
              Drag to orbit · Scroll to zoom
            </p>
          </div>

          <div className="mt-12">
            <OptionPanel build={build} onChange={(patch) => setBuild((b) => ({ ...b, ...patch }))} />
          </div>

          <div className="mt-12 border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-2">Your build sheet</p>
                <p className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
                  ${total.toLocaleString()}
                  <span className="text-sm font-mono font-normal uppercase tracking-widest text-muted-foreground ml-2">
                    est. parts + install
                  </span>
                </p>
              </div>
              <button
                onClick={() => document.getElementById("send-build")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
              >
                Send this build to the team
              </button>
            </div>
          </div>

          <div id="send-build" className="mt-8 scroll-mt-24">
            <BuildSheetForm build={build} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}