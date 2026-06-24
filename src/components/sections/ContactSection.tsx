import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const ContactSection = () => {
  const headerText = getSectionHeader('contact');
  return (
    <section id='contact'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
      </Container>
    </section>
  );
};

export default ContactSection;
