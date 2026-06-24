import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const ProjectsSection = () => {
  const headerText = getSectionHeader('project');

  return (
    <section id='projects'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
      </Container>
    </section>
  );
};

export default ProjectsSection;
