import type { SectionHeaderProps } from '@/types';

const SectionHeader = ({
  title,
  subtitle = '',
  align = 'center',
}: SectionHeaderProps) => {
  const alignStyle = {
    center: 'justify-center text-center',
    left: '',
  };
  return (
    <div className={`flex flex-col gap-2.75 ${alignStyle[align]}`}>
      <p className='font-bold text-display-sm lg:text-display-xl'>{title}</p>
      <p className='font-medium text-sm text-neutral-500 lg:text-lg'>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
