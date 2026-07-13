import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSnowflake,
  faShirt,
  faTemperatureLow,
  faMicrochip,
  faTools,
  faPhoneAlt,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SERVICE_ICONS = [
  { icon: faSnowflake,     color: 'text-blue-300',   label: 'AC Repair' },
  { icon: faShirt,         color: 'text-green-300',  label: 'Washing Machine' },
  { icon: faTemperatureLow,color: 'text-purple-300', label: 'Refrigerator' },
  { icon: faMicrochip,     color: 'text-orange-300', label: 'Microwave' },
  { icon: faTools,         color: 'text-yellow-300', label: 'All Appliances' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 hero-pattern"
    >
      {/* ── Floating background icons ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="floating-icon absolute top-20 left-10 text-6xl text-white/10">
          <FontAwesomeIcon icon={faSnowflake} />
        </span>
        <span className="floating-icon absolute top-40 right-20 text-5xl text-white/10">
          <FontAwesomeIcon icon={faShirt} />
        </span>
        <span className="floating-icon absolute bottom-40 left-20 text-7xl text-white/10">
          <FontAwesomeIcon icon={faTemperatureLow} />
        </span>
      </div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center animate-fade-in-up">

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            <span className="block">Expert</span>
            <span className="text-gradient">Appliance Repairs</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable, and affordable home appliance repair services.{' '}
            <span className="text-accent-400 font-semibold">24/7 emergency support</span> available.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center group"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 group-hover:animate-bounce" />
              Get Free Quote
            </a>
            <a
              href="https://wa.me/+918454855804"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
              WhatsApp Now
            </a>
          </div>

          {/* Service icon grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {SERVICE_ICONS.map(({ icon, color, label }) => (
              <div key={label} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={icon} className={`text-2xl ${color}`} />
                </div>
                <p className="text-white/80 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} className="text-white/60 text-2xl" />
      </div>
    </section>
  );
}
