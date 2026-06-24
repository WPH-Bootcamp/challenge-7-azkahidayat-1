import type { NavbarProp } from '../../types';
import Container from './Container';
import Button from '../ui/Button';
import HamburgerButton from '../ui/HamburgerButton';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Navbar = ({ scrolled }: NavbarProp) => {
  return (
    <header
      className={`sticky  top-0 ${scrolled ? 'backdrop-blur-2xl' : 'bg-transparent'}`}
    >
      <nav>
        <Container variant='header'>
          <Logo />

          <div className='hidden lg:block'>
            <NavLinks variant='desktop' />
          </div>

          <div className='hidden lg:block w-full max-w-49.25'>
            <Button>Let's Talk</Button>
          </div>

          <div className='lg:hidden'>
            <HamburgerButton />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
