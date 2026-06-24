import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const IndustriesSection = () => {
  const headerText = getSectionHeader('industry');

  return (
    <section>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
          align='left'
        />
      </Container>
    </section>
  );
};

export default IndustriesSection;
