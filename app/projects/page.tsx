import ProjectSection from "../components/ProjectSection";
import SectionTitle from "../components/SectionTitle";

export const metadata = {
  title: "Projects | Mostapha Zahiri",
  description: "Explore my portfolio of projects showcasing my expertise in web development, system design, and innovative solutions.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12">
      <SectionTitle title="Projects" subtitle="My Latest Work" />
      <ProjectSection />
    </div>
  );
}
