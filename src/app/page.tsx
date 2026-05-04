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
import PlexusBackground from "@/components/ui/PlexusBackground";

export default function Home() {
  return (
    <main className="site-shell relative min-h-screen">
      <PlexusBackground />
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
