import AboutSection from "../components/AboutSection";
import SectionTitle from "../components/SectionTitle";

export const metadata = {
  title: "About | Mostapha Zahiri",
  description: "Learn more about my background, skills, and experience as a full stack developer.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <SectionTitle title="About Me" subtitle="Get to know me better" />
      <AboutSection />
    </div>
  );
}
