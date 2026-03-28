import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShieldAlt,
  faGift,
  faSnowflake,
  faShirt,
  faTemperatureLow,
  faMicrochip,
  faBolt,
  faInfoCircle,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

/* ── Data ──────────────────────────────────────────────────────── */

const PRICING_CARDS = [
  {
    icon: faSnowflake,
    gradient: 'from-blue-400 to-blue-600',
    border: 'border-blue-100',
    title: 'AC Services',
    items: [
      { label: 'Gas Refilling',    price: '₹1,800 – ₹2,500' },
      { label: 'General Service',  price: '₹800 – ₹1,200'   },
      { label: 'Filter Cleaning',  price: '₹300 – ₹500'     },
      { label: 'PCB Repair',       price: '₹1,500 – ₹3,000' },
      { label: 'Compressor Issue', price: '₹3,500 – ₹8,000' },
    ],
  },
  {
    icon: faShirt,
    gradient: 'from-green-400 to-green-600',
    border: 'border-green-100',
    title: 'Washing Machine',
    items: [
      { label: 'Motor Repair',    price: '₹1,200 – ₹2,500' },
      { label: 'Water Pump',      price: '₹800 – ₹1,500'   },
      { label: 'Door Lock',       price: '₹500 – ₹1,000'   },
      { label: 'PCB / Timer',     price: '₹1,000 – ₹2,000' },
      { label: 'General Service', price: '₹600 – ₹900'     },
    ],
  },
  {
    icon: faTemperatureLow,
    gradient: 'from-purple-400 to-purple-600',
    border: 'border-purple-100',
    title: 'Refrigerator',
    items: [
      { label: 'Gas Refilling',   price: '₹2,000 – ₹3,500' },
      { label: 'Thermostat',      price: '₹800 – ₹1,500'   },
      { label: 'Door Seal',       price: '₹1,200 – ₹2,000' },
      { label: 'Compressor',      price: '₹4,000 – ₹8,000' },
      { label: 'General Service', price: '₹500 – ₹800'     },
    ],
  },
];

const MICROWAVE_ITEMS = [
  { label: 'Microwave Repair',    price: '₹800 – ₹2,000'   },
  { label: 'Magnetron Replace',   price: '₹2,500 – ₹4,000' },
  { label: 'Turntable Motor',     price: '₹500 – ₹1,000'   },
  { label: 'Door Switch',         price: '₹300 – ₹800'     },
];

const EMERGENCY_ITEMS = [
  { label: 'Emergency Call (Night)', price: '+₹200',        highlight: false },
  { label: 'Same Day Service',       price: 'Free',         highlight: true  },
  { label: 'Parts Warranty',         price: '3–6 months',   highlight: true  },
];

const NOTES = [
  'Prices may vary based on appliance brand, model, and issue complexity',
  'All genuine spare parts with warranty included in the price',
  'Free estimate provided before starting any major repair work',
  'No extra charges for labour within Mumbai city limits',
];

/* ── Component ─────────────────────────────────────────────────── */

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No hidden charges, no surprises. Know what you'll pay upfront.
          </p>
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold mt-4">
            <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
            First-time customers get 10% off
          </div>
        </div>

        {/* Visit charge banner */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12 border border-blue-200 dark:border-gray-700">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faHome} className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Service Visit Charge</h3>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">₹150</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">For diagnosis and minor repairs within 30 minutes</p>
            <div className="inline-flex items-center bg-accent-100 dark:bg-yellow-900/30 text-accent-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm">
              <FontAwesomeIcon icon={faGift} className="mr-1" />
              Waived if you proceed with major repair
            </div>
          </div>
        </div>

        {/* Main pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-float p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <FontAwesomeIcon icon={card.icon} className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{card.title}</h3>
              <div className="space-y-4">
                {card.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Microwave + Emergency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Microwave */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-orange-100 dark:border-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faMicrochip} className="text-xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Microwave Services</h3>
            <div className="space-y-3">
              {MICROWAVE_ITEMS.map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/20 rounded-3xl shadow-lg p-8 border-2 border-red-200 dark:border-red-900/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faBolt} className="text-xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Emergency &amp; Extra</h3>
            <div className="space-y-3">
              {EMERGENCY_ITEMS.map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span
                    className={`font-semibold ${
                      item.highlight ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6 mt-12 transition-colors duration-300">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0">
              <FontAwesomeIcon icon={faInfoCircle} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">Important Notes:</h4>
              <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-400">
                {NOTES.map((note) => (
                  <li key={note} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-amber-600 dark:text-amber-500 mr-2 mt-0.5 text-xs shrink-0"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/+918454855804?text=Hi!%20I'd%20like%20to%20get%20a%20free%20estimate%20for%20my%20appliance%20repair."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
            Get Free Estimate Now
          </a>
        </div>
      </div>
    </section>
  );
}