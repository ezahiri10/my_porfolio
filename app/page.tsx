import HeroSection from "./compenents/Profile";
import Navbar from "./compenents/Navbar";
import AboutSection from "./compenents/AboutSection";
import ProjectSection from "./compenents/ProjectSection";
import EmailSection from "./compenents/EmailSection";
import Footer from "./compenents/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212] ">
      <Navbar/>
      <div className="p container w-auto py-7 px-11 mt-24"></div>
      <HeroSection />
      <AboutSection/>
      <ProjectSection />
      <EmailSection />
      <Footer/>
    </main>
  );
}
