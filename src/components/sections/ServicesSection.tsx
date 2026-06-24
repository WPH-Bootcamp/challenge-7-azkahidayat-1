import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const ServicesSection = () => {
  const headerText = getSectionHeader('service');
  return (
    <section id='service'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
      </Container>
    </section>
  );
};

export default ServicesSection;
