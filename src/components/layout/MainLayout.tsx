import { useEffect, useState } from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import OffcanvasMenu from '@/components/layout/OffcanvasMenu';
import type { LayoutProps } from '@/types';
import { useMobileMenu } from '@/contexts/mobile-menu/useMobileMenu';

const MainLayout = ({ children }: LayoutProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen } = useMobileMenu();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div className={`min-h-screen dark:bg-black `}>
      <Navbar scrolled={scrolled} />
      <div>
        <OffcanvasMenu />
      </div>
      <main>
        <div className='wrapper'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
