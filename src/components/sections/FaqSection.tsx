import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const FaqSection = () => {
  const headerText = getSectionHeader('faq');
  return (
    <section id='faq'>
      <Container>
        <SectionHeader title={headerText.title} align='left' />
      </Container>
    </section>
  );
};

export default FaqSection;
