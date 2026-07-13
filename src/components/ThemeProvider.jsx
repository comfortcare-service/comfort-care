'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* ── Read saved preference (or system) on first mount ── */
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? saved === 'dark' : prefersDark;
    setDark(shouldBeDark);
    setMounted(true);
  }, []);

  /* ── Apply / remove the "dark" class on <html> ── */
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark, mounted]);

  const toggle = () => setDark((prev) => !prev);

  /* ── Avoid flash: hide content until theme is resolved ── */
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}