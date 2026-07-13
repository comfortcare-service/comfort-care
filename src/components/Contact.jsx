'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SERVICE_OPTIONS = [
  { value: 'ac',          label: 'AC Repair'        },
  { value: 'washing',     label: 'Washing Machine'  },
  { value: 'refrigerator',label: 'Refrigerator'     },
  { value: 'microwave',   label: 'Microwave'        },
  { value: 'other',       label: 'Other'            },
];

const WORKING_HOURS = [
  { day: 'Monday – Friday', hours: '8:00 AM – 8:00 PM'    },
  { day: 'Saturday',        hours: '9:00 AM – 6:00 PM'    },
  { day: 'Sunday',          hours: '10:00 AM – 4:00 PM'   },
];

/* ── ContactForm (needs interactivity → 'use client' on the file) ── */
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name    = fd.get('name')    ?? '';
    const phone   = fd.get('phone')   ?? '';
    const service = fd.get('service') ?? '';
    const message = fd.get('message') ?? '';

    const text = encodeURIComponent(
      `Hi! I need appliance repair service.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    );
    window.open(`https://wa.me/+918454855804?text=${text}`, '_blank');
  };

const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary-400 transition-colors';

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="name"  type="text" placeholder="Your Name"    required className={inputCls} />
        <input name="phone" type="tel"  placeholder="Phone Number"  required className={inputCls} />
      </div>

      <input name="email" type="email" placeholder="Email Address" className={inputCls} />

      <select name="service" required className={inputCls}>
        <option value="" disabled className="text-gray-900">Select Service Type</option>
        {SERVICE_OPTIONS.map((o) => (
          <option key={o.value} value={o.value} className="text-gray-900">
            {o.label}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Describe the issue…"
        rows={4}
        required
        className={`${inputCls} resize-none`}
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
        Send Message
      </button>
    </form>
  );
}

/* ── Main section ───────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to get your appliances fixed? Contact us for a free estimate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="glass-effect rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <ContactForm />
          </div>

          {/* Contact info + hours */}
          <div className="space-y-8">

            {/* Quick contact */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-6">

                <a href="tel:+918454855804" className="flex items-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call Now</div>
                    <div className="text-white/80">+91 84548 55804</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/+918454855804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shrink-0">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-white/80">Chat with us instantly</div>
                  </div>
                </a>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-white/80">comfortcare.engineer@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Service Area</div>
                    <div className="text-white/80">Mumbai &amp; Greater Metro Area</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Service hours */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Service Hours</h3>
              <div className="space-y-3">
                {WORKING_HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-white/80">{day}</span>
                    <span className="text-white font-semibold">{hours}</span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-3 mt-4 flex justify-between">
                  <span className="text-white/80">Emergency Service</span>
                  <span className="text-accent-400 font-semibold">24/7 Available</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}