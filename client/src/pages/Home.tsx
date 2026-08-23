import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutAndBio from "@/components/AboutAndBio";
import ProjectShowcase from "@/components/ProjectShowcase";

import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] relative">
      {/* Shutter Preloader Curtain */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Subtle Vintage Grain Texture Overlay */}
      <div className="editorial-grain" aria-hidden="true" />

      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section with LinkedIn Photo, Fomenta & FATEC links */}
      <Hero />

      {/* About & Bio Narrative (Sincere & Dedicated) */}
      <AboutAndBio />

      {/* Catálogo de Projetos: grid filtrável + modal com demos ao vivo */}
      <ProjectShowcase />


      {/* Professional Journey & Timeline */}
      <ExperienceTimeline />

      {/* Dramatic Exit Contact Section */}
      <ContactSection />
    </div>
  );
}
