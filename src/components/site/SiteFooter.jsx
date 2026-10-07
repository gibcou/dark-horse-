import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const LOGO =
  "https://irp.cdn-website.com/09b6c26d/dms3rep/multi/Dark+Horse+Outfitters+logo+horizontal.svg";

const hours = [
  { d: "Mon - Thu", h: "7:00 AM - 6:00 PM" },
  { d: "Fri", h: "Closed" },
  { d: "Sat - Sun", h: "Closed" },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img src={LOGO} alt="Dark Horse Outfitters" className="h-11 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Montana's premier truck outfitting business - your place in the valley for
              premier vehicle parts and accessories.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/darkhorsemt/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/darkhorseoutfitters/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors">Recent Builds</Link></li>
              <li><Link to="/#why" className="text-muted-foreground hover:text-foreground transition-colors">Why Us</Link></li>
              <li><Link to="/#vendors" className="text-muted-foreground hover:text-foreground transition-colors">Vendors</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Plan Your Build</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:4065876103" className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  406-587-6103
                </a>
              </li>
              <li>
                <a href="mailto:sales@darkhorseoutfitters.com" className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  sales@darkhorseoutfitters.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                104 Village Center Ln
                <br />Bozeman, MT 59718
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-4">
              Hours
            </h4>
            <ul className="space-y-2.5 text-sm">
              {hours.map((row) => (
                <li key={row.d} className="flex items-start gap-2.5 text-muted-foreground">
                  <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>
                    <span className="block text-foreground">{row.d}</span>
                    <span className="text-xs">{row.h}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Dark Horse Outfitters · Bozeman, Montana
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            45.6770° N · 111.0479° W
          </p>
        </div>
      </div>
    </footer>
  );
}