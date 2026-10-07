import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "Full Custom Build",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    // Implement your own form submission logic here
  };

  if (status === "success") {
    return (
      <div className="border border-primary/40 bg-primary/5 p-8 sm:p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground mb-2">
          Inquiry received
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Thanks, {form.name.split(" ")[0] || "there"}. Our team will reach out shortly to
          start planning your build. For anything urgent, call{" "}
          <a href="tel:4065876103" className="text-primary">406-587-6103</a>.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", vehicle: "", service: "Full Custom Build", message: "" });
          }}
          className="mt-6 text-xs font-mono uppercase tracking-widest text-primary hover:underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name *">
          <input
            required
            value={form.name}
            onChange={update("name")}
            className="input"
            placeholder="Jordan Smith"
          />
        </Field>
        <Field label="Email *">
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            className="input"
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={update("phone")}
            className="input"
            placeholder="406-555-0100"
          />
        </Field>
        <Field label="Vehicle (year / make / model)">
          <input
            value={form.vehicle}
            onChange={update("vehicle")}
            className="input"
            placeholder="2021 Tacoma TRD"
          />
        </Field>
      </div>

      <Field label="What are you after?">
        <input
          value={form.service}
          onChange={update("service")}
          className="input"
        />
      </Field>

      <Field label="Tell us about the build">
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          className="input resize-none"
          placeholder="Goals, budget range, timeline, anything we should know…"
        />
      </Field>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Inquiry
            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}