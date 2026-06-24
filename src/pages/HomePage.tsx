import {
  ClientsSection,
  ContactSection,
  FaqSection,
  HeroSection,
  IndustriesSection,
  OurProcessSection,
  PortfolioSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
} from '../components/sections';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <div>
        <StatsSection />
        <OurProcessSection />
        <ServicesSection />
        <IndustriesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
