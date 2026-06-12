import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Wrench,
  Mountain,
  Fuel,
  Grid3X3,
  ArrowRight,
  Shield,
  Users,
  Award,
  Building2,
} from 'lucide-react';
import Hero from '../components/Hero';

const services = [
  {
    icon: Wrench,
    title: 'Construcții Drumuri',
    desc: 'Executăm lucrări de construcție și reabilitare a drumurilor, mixturi asfaltice și infrastructură rutieră la cele mai înalte standarde.',
    slug: 'drumuri',
  },
  {
    icon: Mountain,
    title: 'Carieră Piatră Zlatna',
    desc: 'Exploatăm și producem cribluri, spărturi de piatră și agregate minerale în cariera de la Zlatna, județul Alba.',
    slug: 'cariera',
  },
  {
    icon: Fuel,
    title: 'Benzinării',
    desc: 'Operăm un lanț de benzinării în județul Alba și stații mobile de distribuție carburanți, în parteneriat cu Rompetrol.',
    slug: 'benzinarli',
  },
  {
    icon: Grid3X3,
    title: 'Piatră Cubică',
    desc: 'Furnizăm piatră cubică pentru pavaje, amenajări urbane și lucrări de finisaj exterior.',
    slug: 'piatra',
  },
];

const highlights = [
  { icon: Shield, label: 'Certificare și Siguranță' },
  { icon: Users, label: 'Echipă Profesionistă' },
  { icon: Award, label: 'Peste 25 de Ani de Experiență' },
  { icon: Building2, label: 'Partener Rompetrol' },
];

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />

      <section className="section-spacing bg-gradient-soft">
        <div className="section-container section-padding">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">
                Domenii de Activitate
              </span>
              <h2 className="heading-lg mt-3 text-balance">
                Soluții Integrate pentru Infrastructură și Industrie
              </h2>
              <p className="mt-4 text-ink-muted text-lg leading-relaxed">
                Patru divizii complementare, o singură echipă — de la
                producția de agregate până la livrarea de carburanți.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => (
              <FadeInSection key={s.title} delay={i * 0.1}>
                <div className="group relative bg-surface rounded-xl border border-black/5 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-5 group-hover:bg-brand-navy/10 transition-colors">
                    <s.icon size={24} className="text-brand-navy" />
                  </div>
                  <h3 className="heading-md text-xl">{s.title}</h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">{s.desc}</p>
                  <Link
                    to={`/servicii#${s.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-brand-navy font-medium text-sm hover:gap-2.5 transition-all"
                  >
                    Află mai multe <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface">
        <div className="section-container section-padding">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">
                De ce Noi
              </span>
              <h2 className="heading-lg mt-3">
                Construim Încredere din 1999
              </h2>
              <p className="mt-4 text-ink-muted text-lg leading-relaxed">
                Seriozitate, calitate și parteneri potriviți — acestea sunt
            fundația fiecărui proiect Europexpres.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <FadeInSection key={h.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center mx-auto mb-4">
                    <h.icon size={28} className="text-brand-navy" />
                  </div>
                  <p className="font-semibold text-sm">{h.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-navy text-white">
        <div className="section-container section-padding">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-lg text-balance">
                Sunteți pregătit să începem colaborarea?
              </h2>
              <p className="mt-4 text-white/60 text-lg leading-relaxed">
                Fie că aveți nevoie de agregate, carburanți sau lucrări de
                construcție — suntem aici pentru dumneavoastră.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                  Solicită Ofertă
                </Link>
                <Link
                  to="/servicii"
                  className="btn-outline-light text-base px-8 py-3.5"
                >
                  Vezi Toate Serviciile
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
