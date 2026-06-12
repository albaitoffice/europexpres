import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    items: ['0258.815.855', '0744.510.902', 'Fax: 0258.819.128'],
  },
  {
    icon: Mail,
    label: 'Email',
    items: ['europexpres@yahoo.com'],
    href: 'mailto:europexpres@yahoo.com',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    items: ['Alba Iulia, Județul Alba'],
  },
  {
    icon: Clock,
    label: 'Program',
    items: ['Luni – Vineri: 08:00 – 17:00'],
  },
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate send
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1200);
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-hero text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Contact
          </span>
          <h1 className="heading-xl mt-3 text-balance">
            Suntem aici pentru dumneavoastră
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Solicită o ofertă, programează o livrare sau pur și simplu
            cunoaște-ne echipa.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                    <info.icon size={20} className="text-brand-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-ink-muted">{info.label}</p>
                    {info.items.map((item) =>
                      info.href ? (
                        <a
                          key={item}
                          href={info.href}
                          className="block text-brand-navy hover:underline"
                        >
                          {item}
                        </a>
                      ) : (
                        <p key={item} className="text-sm">
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <a href="tel:0258815855" className="btn-primary w-full sm:w-auto">
                  <Phone size={16} /> Sună Acum
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-black/5 p-6 md:p-8"
              >
                <h2 className="text-xl font-bold mb-6">Trimite-ne un mesaj</h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <CheckCircle size={28} className="text-green-600" />
                    </div>
                    <p className="text-lg font-semibold">Mesaj trimis cu succes!</p>
                    <p className="text-ink-muted text-sm mt-1">
                      Vom reveni cu un răspuns în cel mai scurt timp.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-brand-navy font-medium text-sm mt-4 hover:underline"
                    >
                      Trimite alt mesaj
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                          Nume *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-surface focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors text-sm"
                          placeholder="Numele dumneavoastră"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-surface focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors text-sm"
                          placeholder="office@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-surface focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors text-sm"
                          placeholder="07XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                          Subiect *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-surface focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors text-sm"
                          placeholder="Ce vă interesează?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                        Mesaj *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-black/10 bg-surface focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy transition-colors text-sm resize-y"
                        placeholder="Descrieți necesarul dumneavoastră..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Se trimite...
                        </>
                      ) : (
                        <>
                          Trimite Mesajul <Send size={16} />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                        <AlertCircle size={16} />
                        A apărut o eroare. Vă rugăm încercați din nou.
                      </div>
                    )}
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
