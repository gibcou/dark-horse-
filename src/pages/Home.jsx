import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import WhyUs from "@/components/site/WhyUs";
import Vendors from "@/components/site/Vendors";
import ContactCTA from "@/components/site/ContactCTA";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Vendors />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}