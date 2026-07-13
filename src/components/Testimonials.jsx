import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-regular-svg-icons';

const REVIEWS = [
  {
    initials: 'O',
    name: 'Om Pandey',
    gradient: 'from-blue-400 to-blue-600',
    rating: 5,
    text: 'Amazing service! My AC broke down during the summer heat, and they fixed it within 2 hours. Professional, quick, and reasonably priced. Highly recommend!',
    ago: '2 weeks ago',
  },
  {
    initials: 'R',
    name: 'Rajesh Gupta',
    gradient: 'from-green-400 to-green-600',
    rating: 5,
    text: 'Excellent washing machine repair service. The technician was knowledgeable, explained the issue clearly, and fixed it perfectly. Great customer service!',
    ago: '1 month ago',
  },
  {
    initials: 'K',
    name: 'Kishore Jha',
    gradient: 'from-purple-400 to-purple-600',
    rating: 4,
    text: 'Quick response time and professional service. My refrigerator is working like new again. Fair pricing and honest work. Will definitely use again!',
    ago: '3 weeks ago',
  },
];

const STATS = [
  { value: '5000+', label: 'Repairs Completed' },
  { value: '4.9/5', label: 'Average Rating'    },
  { value: '24/7',  label: 'Service Available' },
  { value: '10+',   label: 'Years Experience'  },
];

function StarRating({ rating }) {
  return (
    <div className="flex text-yellow-400">
      {[1, 2, 3, 4, 5].map((n) => (
        <FontAwesomeIcon
          key={n}
          icon={n <= rating ? faStar : faStarHalfAlt}
          className="text-sm"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div key={r.name} className="testimonial-card rounded-3xl p-8 hover-float">
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${r.gradient} rounded-full flex items-center justify-center mr-4 shrink-0`}
                >
                  <span className="text-white font-bold">{r.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{r.name}</h4>
                  <StarRating rating={r.rating} />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{r.text}</p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {r.ago}
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{s.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}