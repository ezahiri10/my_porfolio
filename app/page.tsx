import Profile from "./compenents/Profile";
import AboutSection from "./compenents/AboutSection";
import ProjectSection from "./compenents/ProjectSection";
import EmailTemplate from "./compenents/EmailTemplate";
import Cube3D from "./compenents/Cub3d";
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
        <EmailTemplate />
        <Cube3D />
      </section>
    </>
  );
}
