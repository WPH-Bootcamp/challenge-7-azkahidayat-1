import { createContext } from 'react';
import type { DarkContextType } from '../../types';

export const DarkContext = createContext<DarkContextType | null>(null);
