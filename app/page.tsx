import Profile from "./compenents/Profile";
import AboutSection from "./compenents/AboutSection";
import ProjectSection from "./compenents/ProjectSection";
import EmailTemplate from "./compenents/EmailTemplate";
import Starfield from "./compenents/Starfield";

export default function Home() {
  return (
    <>
      <Starfield />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Profile />
        <section id="about">
          <AboutSection />
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
