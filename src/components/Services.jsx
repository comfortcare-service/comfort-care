import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSnowflake,
  faShirt,
  faTemperatureLow,
  faMicrochip,
  faTools,
  faCheck,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const SERVICES = [
  {
    icon: faSnowflake,
    gradient: 'from-blue-400 to-blue-600',
    title: 'AC Repair & Service',
    description:
      'Complete air conditioning solutions including repair, maintenance, gas refilling, and installation services.',
    points: ['Emergency repairs', 'Gas refilling', 'Filter cleaning', 'Installation'],
  },
  {
    icon: faShirt,
    gradient: 'from-green-400 to-green-600',
    title: 'Washing Machine',
    description:
      'Expert repair services for all brands of washing machines, both automatic and semi-automatic.',
    points: ['Motor repairs', 'Drum replacement', 'Water pump issues', 'Control panel'],
  },
  {
    icon: faTemperatureLow,
    gradient: 'from-purple-400 to-purple-600',
    title: 'Refrigerator Repair',
    description:
      'Keep your food fresh with our comprehensive refrigerator repair and maintenance services.',
    points: ['Cooling issues', 'Compressor repair', 'Thermostat', 'Gas refilling'],
  },
  {
    icon: faMicrochip,
    gradient: 'from-orange-400 to-orange-600',
    title: 'Microwave Oven',
    description:
      'Professional microwave repair services including magnetron, turntable, and control panel issues.',
    points: ['Not heating', 'Turntable issues', 'Door problems', 'Control panel'],
  },
  {
    icon: faTools,
    gradient: 'from-indigo-400 to-indigo-600',
    title: 'Other Appliances',
    description:
      'We repair various home appliances including dishwashers, ovens, dryers, and more.',
    points: ['Dishwashers', 'Electric ovens', 'Dryers', 'Small appliances'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ───────────────────────────────────────── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Expert Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all your home appliances with guaranteed satisfaction
          </p>
        </div>

        {/* ── Cards grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="service-card rounded-3xl p-8 hover-float group">
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${svc.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <FontAwesomeIcon icon={svc.icon} className="text-2xl text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{svc.description}</p>

              {/* Feature list */}
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {svc.points.map((point) => (
                  <li key={point} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group/link"
              >
                Book Service{' '}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
