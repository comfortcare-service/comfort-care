import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSnowflake,
  faShirt,
  faTemperatureLow,
  faLightbulb,
  faExclamationTriangle,
  faInfoCircle,
  faCalendarAlt,
  faSeedling,
  faSun,
  faLeaf,
  faPiggyBank,
  faPhone,
  faTools,
  faRupeeSign,
} from '@fortawesome/free-solid-svg-icons';

/* ── Maintenance tip cards ──────────────────────────────────────── */
const TIPS = [
  {
    icon: faSnowflake,
    gradient: 'from-blue-400 to-blue-600',
    border: 'border-blue-100',
    title: 'AC Maintenance Tips',
    tips: [
      'Clean filters every 2–3 weeks during heavy use',
      'Keep outdoor unit free from dust and debris',
      "Don't set temperature below 24°C to save electricity",
      'Service before summer starts (March–April)',
    ],
    alert: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: faExclamationTriangle,
      label: 'Call us if:',
      body: 'AC not cooling, strange noise, or high electricity bill',
    },
  },
  {
    icon: faShirt,
    gradient: 'from-green-400 to-green-600',
    border: 'border-green-100',
    title: 'Washing Machine Care',
    tips: [
      'Don\'t overload – fill only 3/4 capacity',
      'Clean lint filter after every use',
      'Leave door open after wash to air dry',
      'Run empty hot water cycle monthly',
    ],
    alert: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: faExclamationTriangle,
      label: 'Warning signs:',
      body: 'Excessive vibration, water not draining, or unusual noise',
    },
  },
  {
    icon: faTemperatureLow,
    gradient: 'from-purple-400 to-purple-600',
    border: 'border-purple-100',
    title: 'Refrigerator Care',
    tips: [
      'Keep fridge 3/4 full for optimal efficiency',
      'Clean coils at back every 6 months',
      'Check door seals regularly for cracks',
      'Don\'t put hot food directly inside',
    ],
    alert: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: faInfoCircle,
      label: 'Energy saving:',
      body: 'Set temperature to 37–40 °F (3–4 °C)',
    },
  },
];

/* ── Seasonal schedule ──────────────────────────────────────────── */
const SEASONS = [
  {
    icon: faSeedling,
    gradient: 'from-green-400 to-green-600',
    title: 'Spring (March–May)',
    desc: 'AC deep cleaning & gas check before summer heat',
  },
  {
    icon: faSun,
    gradient: 'from-yellow-400 to-orange-500',
    title: 'Summer (June–Aug)',
    desc: 'Refrigerator maintenance & microwave service check',
  },
  {
    icon: faLeaf,
    gradient: 'from-orange-400 to-red-500',
    title: 'Monsoon (Sep–Nov)',
    desc: 'Washing machine deep clean & electrical safety check',
  },
  {
    icon: faSnowflake,
    gradient: 'from-blue-400 to-purple-500',
    title: 'Winter (Dec–Feb)',
    desc: 'General appliance check-up & maintenance service',
  },
];

/* ── Money-saving tips ──────────────────────────────────────────── */
const MONEY_TIPS = {
  left: {
    icon: faPhone,
    title: 'Call Before Replacing',
    items: [
      '80% of "broken" appliances just need simple repairs',
      'Free diagnosis over WhatsApp with photos',
      'Repair costs 70% less than buying new',
    ],
  },
  right: {
    icon: faTools,
    title: 'Regular Maintenance Saves Money',
    items: [
      'Annual service prevents 90% of major breakdowns',
      'Clean appliances use 20% less electricity',
      'Extends appliance life by 3–5 years',
    ],
  },
};

/* ── Component ─────────────────────────────────────────────────── */
export default function Tips() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Expert <span className="text-gradient">Tips &amp; Advice</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Save money and extend your appliances' life with these professional tips
          </p>
        </div>

        {/* Tip cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TIPS.map((t) => (
            <div
              key={t.title}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-float p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${t.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <FontAwesomeIcon icon={t.icon} className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {t.tips.map((tip) => (
                  <li key={tip} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="text-yellow-500 mr-2 mt-1 text-xs shrink-0"
                    />
                    {tip}
                  </li>
                ))}
              </ul>
              <div
                className={`mt-6 p-3 ${t.alert.bg} rounded-lg border ${t.alert.border}`}
              >
                <p className={`text-sm ${t.alert.text}`}>
                  <FontAwesomeIcon icon={t.alert.icon} className="mr-2" />
                  <strong>{t.alert.label}</strong> {t.alert.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-primary-500 mr-3" />
            Seasonal Service Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONS.map((s) => (
              <div key={s.title} className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${s.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <FontAwesomeIcon icon={s.icon} className="text-2xl text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money-saving tips */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-3xl p-8 border border-green-200 dark:border-green-900/50 transition-colors duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faPiggyBank} className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Money-Saving Tips</h3>
            <p className="text-gray-600 dark:text-gray-400">Simple steps that can save you thousands on repairs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[MONEY_TIPS.left, MONEY_TIPS.right].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FontAwesomeIcon icon={col.icon} className="text-green-600 dark:text-green-400 mr-2" />
                  {col.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <FontAwesomeIcon
                        icon={faRupeeSign}
                        className="text-green-500 mr-2 mt-1 text-xs shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
            Appliance emergency? Don't wait – call now!
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918454855804"
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-3" />
              Emergency Call
            </a>
            <a
              href="https://wa.me/+918454855804?text=Hi!%20I%20have%20an%20appliance%20emergency.%20Can%20you%20help?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTools} className="mr-3" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}