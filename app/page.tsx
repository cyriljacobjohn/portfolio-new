import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JourneySection from "@/components/JourneySection";

// The home page stitches together the various sections of the portfolio.
export default function Home() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />
      <main>
        {/* Landing section with hero copy and call to action */}
        <Hero />
        {/* About section detailing the journey */}
        <AboutSection />
        {/* Portfolio section showcasing projects, certificates and tech stack */}
        <JourneySection />
        <PortfolioSection />
        {/* Contact section to encourage visitors to connect */}
        <ContactSection />
      </main>
      {/* Simple footer */}
      <Footer />
    </>
  );
}