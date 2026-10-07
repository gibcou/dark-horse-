import React from "react";
import {
  VEHICLES,
  PAINTS,
  LIFTS,
  TIRES,
  WHEELS,
  BUMPERS,
  TOPPERS,
  LIGHTS,
} from "@/lib/buildOptions";

function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 text-sm font-semibold border transition-colors ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Group({ label, children }) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">{label}</p>
      {children}
    </div>
  );
}

export default function OptionPanel({ build, onChange }) {
  const patch = (k, v) => onChange({ [k]: v });
  const topperOptions = build.vehicle === "jeep" ? TOPPERS.filter((t) => t.value !== "topper") : TOPPERS;
  const pillRow = (opts, key, current) => (
    <div className="flex flex-wrap gap-2">
      {opts.map((o) => (
        <Pill key={o.value} active={current === o.value} onClick={() => patch(key, o.value)}>
          {o.label}
        </Pill>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
      <Group label="Vehicle">
        <div className="grid grid-cols-2 gap-2">
          {VEHICLES.map((v) => (
            <button
              key={v.value}
              onClick={() => patch("vehicle", v.value)}
              className={`px-4 py-4 border text-left transition-colors ${
                build.vehicle === v.value
                  ? "border-primary text-foreground"
                  : "border-border text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              <span className="block font-display text-lg font-bold uppercase tracking-tight">{v.label}</span>
              <span className="block mt-1 text-xs font-mono uppercase tracking-widest text-primary">Base platform</span>
            </button>
          ))}
        </div>
      </Group>

      <Group label="Paint">
        <div className="flex flex-wrap gap-3">
          {PAINTS.map((p) => (
            <button
              key={p.value}
              title={p.label}
              aria-label={p.label}
              onClick={() => patch("paint", p.value)}
              className={`w-10 h-10 rounded-full border-2 transition-transform hover:scale-110 ${
                build.paint === p.value ? "border-primary ring-2 ring-primary/40" : "border-border"
              }`}
              style={{ backgroundColor: p.hex }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">{build.paint}</p>
      </Group>

      <Group label="Suspension">{pillRow(LIFTS, "lift", build.lift)}</Group>
      <Group label="Tires">{pillRow(TIRES, "tires", build.tires)}</Group>
      <Group label="Wheels">{pillRow(WHEELS, "wheels", build.wheels)}</Group>
      <Group label="Front Bumper">{pillRow(BUMPERS, "bumper", build.bumper)}</Group>
      <Group label="Bed / Roof">{pillRow(topperOptions, "topper", build.topper)}</Group>
      <Group label="Lighting">{pillRow(LIGHTS, "lighting", build.lighting)}</Group>
    </div>
  );
}