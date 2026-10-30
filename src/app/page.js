import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <div className="grid-veil" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
