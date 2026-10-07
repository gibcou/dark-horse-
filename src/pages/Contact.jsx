import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import Navbar from "@/components/site/Navbar";
import SiteFooter from "@/components/site/SiteFooter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      <section className="relative border-t border-border pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-3">
              // Plan Your Build
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-foreground leading-[0.95]">
              Let's get to
              <span className="text-primary"> work.</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Fill out the form and our team will put together a build plan and quote. The
              more detail you give us about your rig and goals, the better we can help.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Phone} label="Call" value="406-587-6103" href="tel:4065876103" />
              <ContactRow icon={Mail} label="Email" value="sales@darkhorseoutfitters.com" href="mailto:sales@darkhorseoutfitters.com" />
              <ContactRow icon={MapPin} label="Shop" value="104 Village Center Ln, Bozeman, MT 59718" />
              <ContactRow icon={Clock} label="Hours" value="Mon – Thu 7AM–6PM · Fri – Sun closed" />
            </div>

            <div className="mt-10 p-5 border border-border bg-card">
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                Walk-ins welcome
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer to see the shop in person? Stop by during business hours and we'll
                walk your truck with you.
              </p>
            </div>
          </div>

          <div className="lg:pt-2">
            <ContactForm />
          </div>
        </div>
      </div>
      </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex items-center justify-center w-11 h-11 border border-border text-primary shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="text-foreground font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a> : content;
}