'use client';

import { ReactNode, useReducer } from 'react';
import { ThemeContext, ThemeDispatchContext } from './ThemeContext';
import themeReducer from './themeReducer';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, dispatch] = useReducer(themeReducer, 'dark');
  
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}
