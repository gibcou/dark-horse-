import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { buildSummary, estimate } from "@/lib/buildOptions";

export default function BuildSheetForm({ build }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please add your name and email so the team can reach you.");
      return;
    }
    setSending(true);
    setError("");
    // Implement your own form submission logic here
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", notes: "" });
    setSent(false);
  };

  if (sent) {
    return (
      <div className="border border-border bg-card p-8 sm:p-12 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
          Build sheet sent.
        </h3>
        <p className="mt-3 max-w-md mx-auto text-muted-foreground leading-relaxed text-sm">
          The Dark Horse team has your build and will reach out shortly to talk through the details,
          timeline, and final quote.
        </p>
        <button
          onClick={reset}
          className="mt-8 px-8 py-3.5 border border-border text-foreground font-bold uppercase tracking-wide text-sm hover:border-primary hover:text-primary transition-colors"
        >
          Plan another build
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-border bg-card p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2">Name *</label>
          <input className="input" value={form.name} onChange={set("name")} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2">Email *</label>
          <input className="input" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2">Phone</label>
          <input className="input" value={form.phone} onChange={set("phone")} placeholder="Optional" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2">
          Anything else the team should know?
        </label>
        <textarea
          className="input min-h-[96px]"
          value={form.notes}
          onChange={set("notes")}
          placeholder="How you use the rig, timeline, must-have parts..."
        />
      </div>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {sending ? "Sending build sheet..." : "Send this build to the team"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        No payment now - this sends your build sheet to the shop, and the team follows up with a quote.
      </p>
    </form>
  );
}