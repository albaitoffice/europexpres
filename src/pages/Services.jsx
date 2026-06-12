import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Mountain,
  Fuel,
  Grid3X3,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react';

const services = [
  {
    id: 'drumuri',
    icon: Wrench,
    title: 'Construcții Drumuri',
    subtitle: 'Infrastructură rutieră și mixturi asfaltice',
    description:
      'Executăm lucrări complete de construcție, reabilitare și întreținere a drumurilor. Dispunem de utilaje moderne și o echipă experimentată pentru a livra proiecte la cele mai înalte standarde de calitate.',
    features: [
      'Construcție drumuri noi și reabilitare',
      'Mixturi asfaltice și strat de uzură',
      'Sisteme de drenaj și semnalizare',
      'Lucrări de terasamente și fundații',
    ],
  },
  {
    id: 'cariera',
    icon: Mountain,
    title: 'Carieră Piatră Zlatna',
    subtitle: 'Cribluri, spărturi și agregate minerale',
    description:
      'Exploatăm cariera de piatră de la Zlatna, județul Alba, producând o gamă variată de agregate minerale pentru construcții, infrastructură și industrie.',
    features: [
      'Cribluri și sorturi de piatră',
      'Spărturi de piatră pentru fundații',
      'Agregate pentru betoane și asfalt',
      'Livrare directă din carieră',
    ],
  },
  {
    id: 'benzinarli',
    icon: Fuel,
    title: 'Benzinării',
    subtitle: 'Distribuție carburanți — Partener Rompetrol',
    description:
      'Operăm un lanț de benzinării în județul Alba, precum și stații mobile de distribuție carburanți. În parteneriat cu Rompetrol, asigurăm combustibil de calitate pentru toate nevoile.',
    features: [
      'Rețea de benzinării în județul Alba',
      'Stații mobile de distribuție',
      'Carburanți Rompetrol de calitate',
      'Prețuri competitive și service rapid',
    ],
  },
  {
    id: 'piatra',
    icon: Grid3X3,
    title: 'Piatră Cubică',
    subtitle: 'Pavaje și amenajări urbane',
    description:
      'Furnizăm piatră cubică naturală pentru pavaje, trotuare, piețe publice și amenajări peisagistice. Produsul nostru combină estetica tradițională cu durabilitatea necesară traficului intens.',
    features: [
      'Piatră cubică granitică și bazaltică',
      'Dimensiuni standard și personalizate',
      'Rezistență maximă la trafic și intemperii',
      'Soluții pentru spații publice și private',
    ],
  },
];

function ServiceSection({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      id={service.id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
      className={`py-20 md:py-28 ${index % 2 === 1 ? 'bg-gradient-soft' : 'bg-surface'}`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
            <div className="w-14 h-14 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-5">
              <service.icon size={28} className="text-brand-navy" />
            </div>
            <span className="text-brand-red font-semibold text-xs tracking-widest uppercase">
              Divizia {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="heading-lg mt-2">{service.title}</h2>
            <p className="text-ink-muted font-medium mt-1">{service.subtitle}</p>
            <p className="mt-6 text-ink-muted leading-relaxed">{service.description}</p>

            <ul className="mt-8 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-navy mt-0.5 shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary mt-8">
              Solicită Ofertă <ArrowRight size={16} />
            </Link>
          </div>

          <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-soft border border-black/5 flex items-center justify-center">
              <div className="text-center">
                <service.icon size={64} className="text-brand-navy/20 mx-auto" />
                <p className="mt-3 text-ink-muted/50 text-sm font-medium">
                  {service.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-hero text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Servicii
          </span>
          <h1 className="heading-xl mt-3 text-balance">
            Patru Divizii, Un Singur Standard
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            De la agregate și asfalt până la carburanți — fiecare serviciu
            respectă aceleași principii de calitate și seriozitate.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-3 flex-wrap px-4">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/70 text-sm hover:bg-white/20 hover:text-white transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md text-balance">
            Nu găsiți ce căutați?
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Contactați-ne direct — vă vom pune în legătură cu persoana
            potrivită pentru nevoile dumneavoastră.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0258815855" className="btn-outline-light">
              <Phone size={16} /> 0258.815.855
            </a>
            <Link to="/contact" className="btn-primary">
              Formular Contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
