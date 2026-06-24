import type { LayoutProp } from '../../types';

const Container = ({ children, variant = 'default' }: LayoutProp) => {
  const baseStyles = 'flex px-xl lg:px-11xl';

  const variantStyles = {
    default: 'py-8xl flex-col gap-3xl lg:gap-7xl',
    header: 'justify-between items-center py-3xl lg:py-0 lg:h-21',
    footer: '',
  };

  const containerClasses = `
  ${baseStyles}
  ${variantStyles[variant]}
  `.trim();

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
