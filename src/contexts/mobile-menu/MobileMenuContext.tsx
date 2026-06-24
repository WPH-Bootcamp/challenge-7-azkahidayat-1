import { createContext } from 'react';
import type { MobileMenuContextType } from '../../types';

export const MobileMenuContext = createContext<MobileMenuContextType | null>(
  null
);
