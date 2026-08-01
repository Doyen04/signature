import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import VideoShowcase from "./components/VideoShowcase";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <HowItWorks />
        <VideoShowcase />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
