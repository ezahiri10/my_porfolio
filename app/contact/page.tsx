import EmailSection from "../components/EmailSection";
import SectionTitle from "../components/SectionTitle";

export const metadata = {
  title: "Contact | Mostapha Zahiri",
  description: "Get in touch with me for collaborations, projects, or just to say hello!",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <SectionTitle title="Contact" subtitle="Let's work together" />
      <EmailSection />
    </div>
  );
}
