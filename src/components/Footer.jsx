import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const NAV_LINKS = [
  { href: '/#home',         label: 'Home'      },
  { href: '/#services',     label: 'Services'  },
  { href: '/#about',        label: 'About'     },
  { href: '/#testimonials', label: 'Reviews'   },
  { href: '/#contact',      label: 'Contact'   },
  { href: '/receipt',       label: 'Receipt Generator' },
];

const SERVICES = [
  'AC Repair & Service',
  'Washing Machine',
  'Refrigerator',
  'Microwave Oven',
  'Small Appliances',
];

const SOCIALS = [
  { icon: faFacebook,  href: '#' },
  { icon: faTwitter,   href: '#' },
  { icon: faInstagram, href: '#' },
  { icon: faLinkedin,  href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faTools} className="text-white" />
              </div>
              <span className="text-2xl font-display font-bold">QuickCool Repairs</span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner for all home appliance repairs. Fast, reliable, and
              affordable services with guaranteed satisfaction.
            </p>

            <div className="flex space-x-4">
              {SOCIALS.map(({ icon, href }) => (
                <a
                  key={href + icon.iconName}
                  href={href}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={icon.iconName}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} QuickCool Repairs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}