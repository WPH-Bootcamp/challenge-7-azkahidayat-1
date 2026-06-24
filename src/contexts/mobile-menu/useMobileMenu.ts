import { useContext } from 'react';
import { MobileMenuContext } from '@/contexts/mobile-menu/MobileMenuContext';

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);

  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider');
  }

  return context;
};
