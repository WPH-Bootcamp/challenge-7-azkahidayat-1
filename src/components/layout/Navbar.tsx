import type { NavItem } from '../../types';
import Container from './Container';
import CompanyLogo from '../../assets/images/logo-symbol.svg';
import Button from '../ui/Button';
import HamburgerButton from '../ui/HamburgerButton';

const Navbar = () => {
  const navItems: NavItem[] = [
    { title: 'About', href: '#about' },
    { title: 'Service', href: '#service' },
    { title: 'Projects', href: '#projects' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'FAQ', href: '#faq' },
  ];
  return (
    <header className='sticky backdrop-blur-2xl top-0'>
      <Container variant='header'>
        <div className='flex gap-md items-center'>
          <div>
            <img src={CompanyLogo} alt='Company Logo' loading='lazy' />
          </div>
          <span className='font-semibold text-2xl lg:text-3xl'>
            <a href='#'>Your Logo</a>
          </span>
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex lg:gap-lg'>
            {navItems.map((item) => (
              <li key={item.title}>
                <a href={`${item.href}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='hidden lg:block w-full max-w-49.25'>
          <Button>Let's Talk</Button>
        </div>

        <HamburgerButton />
      </Container>
    </header>
  );
};

export default Navbar;
