import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Acasă' },
  { to: '/servicii', label: 'Servicii' },
  { to: '/despre-noi', label: 'Despre Noi' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-brand-navy">
              EUROPE<span className="text-brand-red">XPRES</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-navy bg-brand-navy/5'
                    : 'text-ink-muted hover:text-brand-navy hover:bg-brand-navy/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-4 btn-primary text-sm py-2 px-5">
              Solicită Ofertă
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-brand-navy"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl"
          >
            <div className="max-w-container mx-auto px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.to
                      ? 'text-brand-navy bg-brand-navy/5'
                      : 'text-ink-muted hover:text-brand-navy hover:bg-brand-navy/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block btn-primary text-center mt-4">
                Solicită Ofertă
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
