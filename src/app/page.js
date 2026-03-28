import Navbar       from '../components/Navbar';
import Hero         from '../components/Hero';
import Services     from '../components/Services';
import Pricing      from '../components/Pricing';
import WhyUs        from '../components/WhyUs';
import Tips         from '../components/Tips';
import About        from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact      from '../components/Contact';
import Footer       from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <Tips />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
