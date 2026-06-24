import { useMobileMenu } from '../../contexts/mobile-menu/useMobileMenu';
import type { NavItem } from '../../types';

interface NavLinksProps {
  variant?: 'mobile' | 'desktop';
  className?: string;
}

const NavLinks = ({ variant = 'mobile', className = '' }: NavLinksProps) => {
  const { closeMenu } = useMobileMenu();

  const navItems: NavItem[] = [
    { title: 'About', href: '#about' },
    { title: 'Service', href: '#service' },
    { title: 'Projects', href: '#projects' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'FAQ', href: '#faq' },
  ];
  const baseStyles = `flex gap-lg`;

  const variantStyles = {
    mobile: 'flex-col',
    desktop: 'flex-row',
  };

  const navLinksClasses =
    `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  return (
    <ul className={navLinksClasses}>
      {navItems.map((item) => (
        <li key={item.title} onClick={closeMenu}>
          <a href={`${item.href}`}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
