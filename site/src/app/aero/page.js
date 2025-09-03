import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Aero Portfolio - Rowan Vedangi',
  description: 'Aerospace Engineering Student Portfolio',
};

export default function AeroPortfolio() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
