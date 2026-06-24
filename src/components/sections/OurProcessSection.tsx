import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const OurProcessSection = () => {
  const headerText = getSectionHeader('ourProcess');
  return (
    <section id='our-process'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
      </Container>
    </section>
  );
};

export default OurProcessSection;
