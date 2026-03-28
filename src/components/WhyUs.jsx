import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faShieldAlt,
  faUserTie,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

const REASONS = [
  {
    icon: faClock,
    gradient: 'from-blue-400 to-blue-600',
    title: '24/7 Service',
    description:
      'Emergency repair services available round the clock for urgent issues',
  },
  {
    icon: faShieldAlt,
    gradient: 'from-green-400 to-green-600',
    title: 'Guaranteed Work',
    description: 'All repairs come with warranty and satisfaction guarantee',
  },
  {
    icon: faUserTie,
    gradient: 'from-purple-400 to-purple-600',
    title: 'Expert Technicians',
    description:
      'Certified and experienced professionals with years of expertise',
  },
  {
    icon: faDollarSign,
    gradient: 'from-orange-400 to-orange-600',
    title: 'Fair Pricing',
    description:
      'Transparent and competitive pricing with no hidden charges',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{' '}
            <span className="text-gradient">QuickCool Repairs?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best appliance repair experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((r) => (
            <div key={r.title} className="text-center group">
              <div
                className={`w-20 h-20 mx-auto bg-gradient-to-r ${r.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <FontAwesomeIcon icon={r.icon} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{r.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}