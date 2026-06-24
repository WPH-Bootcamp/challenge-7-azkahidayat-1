import { useState } from 'react';
import type { DarkProviderProps } from '@/types';
import { DarkContext } from '@/contexts/dark-mode/DarkContext';

const DarkProvider = ({ children }: DarkProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
