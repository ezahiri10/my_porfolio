"use client";

import { useState } from "react";
import Profile from "./Profile";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import EmailTemplate from "./EmailTemplate";
import Navbar from "./Navbar";
import SunBackground from "./SunBackground";
import Starfield from "./Starfield";

export default function PageWrapper() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <>
      {/* Full page background */}
      <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
        {isDarkMode ? (
          <Starfield count={1500} speed={0.3} twinkleSpeed={2.5} />
        ) : (
          <SunBackground />
        )}
      </div>

      {/* Navbar with state */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Content */}
      <div className="relative z-10">
        <Profile />
        <section id="about">
          <AboutSection isDarkMode={isDarkMode} />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="contact">
          <EmailTemplate />
        </section>
      </div>
    </>
  );
}
