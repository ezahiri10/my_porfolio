import Profile from "./compenents/Profile";
import AboutSection from "./compenents/AboutSection";
import ProjectSection from "./compenents/ProjectSection";
import EmailSection from "./compenents/EmailSection";

export default function Home() {
  return (
    <>
      <Profile />
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <EmailSection />
      </section>
    </>
  );
}
