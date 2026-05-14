import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="bg-[#050816] text-white">

      <Navbar />

      <Hero />

      <Services />

      <Pricing />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;