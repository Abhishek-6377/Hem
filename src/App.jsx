import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Process from "./components/Process";
import SampleWork from "./components/SampleWork";
import Comparison from "./components/Comparison";
import Reviews from "./components/Reviews";
import About from "./components/About";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
export default function App() {
  return (
    <>
<div className="min-h-screen" style={{ backgroundColor: "" }}>
      <Navbar/>
      <Hero />
      <PainPoints />
      <Services />
      <Industries />
      <Features />
      <Stats />
      <Process />
      <SampleWork />
      <Comparison />
      <Reviews />
      <About />
      <Pricing/>
      <FAQ />
      <Contact/>
      <FinalCTA />
      <Footer />
      </div>
    </>
  );
}
