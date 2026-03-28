'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../components/ThemeProvider';

const NAV_LINKS = [
  { href: '#home',         label: 'Home' },
  { href: '#services',     label: 'Services' },
  { href: '#about',        label: 'About' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact',      label: 'Contact' },
];

const WHATSAPP_URL = 'https://wa.me/+918454855804';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const { dark, toggle }         = useTheme();

  /* ── darken navbar after 50 px scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleAnchorClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop / main nav ─────────────────────────────────────── */}
      <nav
        className="fixed top-0 w-full z-50 glass-effect transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faTools} className="text-white text-lg" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                QuickCool Repairs
              </span>
            </div>

            {/* Desktop links + toggle */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-white/90 hover:text-white transition-colors font-medium"
                >
                  {label}
                </a>
              ))}

              {/* Dark / light toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="theme-toggle"
                title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <FontAwesomeIcon icon={dark ? faSun : faMoon} className="text-white text-lg" />
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-accent-400 to-accent-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Book Now
              </a>
            </div>

            {/* Mobile: toggle + hamburger */}
            <div className="md:hidden flex items-center space-x-3">
              <button onClick={toggle} aria-label="Toggle dark mode" className="theme-toggle">
                <FontAwesomeIcon icon={dark ? faSun : faMoon} className="text-white text-base" />
              </button>
              <button
                className="text-white"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <FontAwesomeIcon icon={faBars} className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end"
          onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
        >
          <div className="bg-white dark:bg-gray-900 w-64 h-full shadow-2xl p-6 flex flex-col transition-colors duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-display font-bold text-gray-800 dark:text-gray-100">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>

            <nav className="space-y-6 flex-1">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAnchorClick}
              className="block mt-6 bg-gradient-to-r from-accent-400 to-accent-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}