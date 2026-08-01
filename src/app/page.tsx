import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
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
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
