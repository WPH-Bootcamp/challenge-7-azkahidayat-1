import type { SectionHeaderProps } from '@/types';

const SectionHeader = ({ title, subtitle, align }: SectionHeaderProps) => {
  const alignStyle = {
    center: 'justify-center',
    left: '',
  };
  return (
    <div className={`flex gap-${alignStyle[align]}`}>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
