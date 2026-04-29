import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Services from "@/components/sections/Services";
import Consultancy from "@/components/sections/Consultancy";
import Resources from "@/components/sections/Resources";
import Products from "@/components/sections/Products";
import WhyAurelia from "@/components/sections/WhyAurelia";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Loader />
      <Navbar />
      <Hero />
      <Overview />
      <Services />
      <Consultancy />
      <Resources />
      <Products />
      <WhyAurelia />
      <Contact />
      <Footer />
    </main>
  );
}
