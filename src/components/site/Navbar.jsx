import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/work" },
  { label: "3D Builder", to: "/builder" },
  { label: "Why Us", to: "/#why" },
  { label: "Vendors", to: "/#vendors" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group">
          <img
            src="https://irp.cdn-website.com/09b6c26d/dms3rep/multi/Dark+Horse+Outfitters+logo+horizontal.svg"
            alt="Dark Horse Outfitters"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:4065876103"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            406-587-6103
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Plan Your Build
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="py-2.5 text-base font-medium text-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-bold uppercase tracking-wide bg-primary text-primary-foreground"
            >
              Plan Your Build
            </Link>
          </nav>
        </div>
      )}

      <motion.div
        className="absolute bottom-0 inset-x-0 h-0.5 bg-primary origin-left"
        style={{ scaleX: progress }}
      />
    </header>
  );
}