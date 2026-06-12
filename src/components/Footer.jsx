import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const services = [
  { to: '/servicii#drumuri', label: 'Construcții Drumuri' },
  { to: '/servicii#cariera', label: 'Carieră Piatră' },
  { to: '/servicii#benzinarli', label: 'Benzinării' },
  { to: '/servicii#piatra', label: 'Piatră Cubică' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-extrabold tracking-tight">
              EUROPE<span className="text-brand-gold">XPRES</span>
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              S.C. EUROPEXPRES S.R.L. — firmă cu tradiție din Alba Iulia,
              înființată în 1999, specializată în construcții, carieră piatră
              și distribuție carburanți.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-white/50 mb-4">
              Servicii
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    className="text-white/70 hover:text-brand-gold text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-white/50 mb-4">
              Link-uri
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Acasă' },
                { to: '/servicii', label: 'Servicii' },
                { to: '/despre-noi', label: 'Despre Noi' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-white/70 hover:text-brand-gold text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-white/50 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div className="text-white/70 text-sm">
                  <div>0258.815.855</div>
                  <div>0744.510.902</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:europexpres@yahoo.com"
                  className="text-white/70 hover:text-brand-gold text-sm transition-colors"
                >
                  europexpres@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Alba Iulia, Județul Alba
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-white/10 gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Europexpres S.R.L. Toate drepturile rezervate.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-brand-gold text-xs transition-colors"
          >
            Început
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
