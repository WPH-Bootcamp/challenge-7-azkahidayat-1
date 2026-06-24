import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const TestimonialsSection = () => {
  const headerText = getSectionHeader('testimonial');

  return (
    <section id='testimonials'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
      </Container>
    </section>
  );
};

export default TestimonialsSection;
