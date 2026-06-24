import { createContext } from 'react';

interface MobileMenuContextType {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

export const MobileMenuContext = createContext<MobileMenuContextType | null>(
  null
);
