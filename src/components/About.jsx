import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const HIGHLIGHTS = [
  '10+ Years of Experience',
  '5000+ Happy Customers',
  'Same Day Service Available',
  'All Major Brands Serviced',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ───────────────────────────────────────────── */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-gradient">QuickCool Repairs</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              With over a decade of experience in home appliance repairs, QuickCool Repairs
              has become the most trusted name in the industry. We pride ourselves on
              delivering fast, reliable, and affordable solutions that keep your home running
              smoothly.
            </p>

            <div className="space-y-4 mb-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" />
              Contact Us Today
            </a>
          </div>

          {/* ── Right: image with stat badges ────────────────────────── */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                alt="Professional technician repairing an appliance"
                width={800}
                height={600}
                className="rounded-3xl shadow-2xl hover-float w-full h-auto"
                priority={false}
              />

              {/* Repairs badge */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transition-colors duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Repairs Done</div>
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute -top-8 -left-8 bg-accent-400 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">⭐ 4.9</div>
                  <div className="text-sm text-white/80">Rating</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}