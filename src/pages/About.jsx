import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Users, TrendingUp, Target, CheckCircle } from 'lucide-react';

const milestones = [
  { year: '1999', label: 'Înființarea companiei' },
  { year: '2000', label: 'Începerea distribuției de carburanți' },
  { year: '2005', label: 'Deschiderea carierei de piatră Zlatna' },
  { year: '2010', label: 'Extinderea rețelei de benzinării' },
  { year: '2015', label: 'Parteneriat strategic Rompetrol' },
  { year: '2024', label: 'Peste 25 de ani de activitate neîntreruptă' },
];

const values = [
  {
    icon: Shield,
    title: 'Seriozitate',
    desc: 'Fiecare angajament este asumat cu responsabilitate. Livrăm la timp, la standardele promise.',
  },
  {
    icon: Users,
    title: 'Parteneriat',
    desc: 'Succesul unui proiect este rodul colaborării cu partenerii potriviți. Construim relații de durată.',
  },
  {
    icon: TrendingUp,
    title: 'Evoluție',
    desc: 'Ne adaptăm continuu cerințelor pieței și investim în utilaje și tehnologii moderne.',
  },
  {
    icon: Target,
    title: 'Calitate',
    desc: 'Oferim doar produse și servicii de cea mai înaltă calitate, la cele mai bune prețuri.',
  },
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

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-hero text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Despre Noi
          </span>
          <h1 className="heading-xl mt-3 text-balance">
            O Poveste de Peste 25 de Ani
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Din 1999, construim și livrăm cu aceeași seriozitate.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div>
                <span className="text-brand-red font-semibold text-xs tracking-widest uppercase">
                  Povestea Noastră
                </span>
                <h2 className="heading-lg mt-2">Tradiție și Profesionalism</h2>
                <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
                  <p>
                    S.C. EUROPEXPRES S.R.L. a fost înființată în anul 1999 în Alba Iulia,
                    cu o paletă largă de domenii de activitate. Principalul nostru domeniu
                    este distribuția de carburanți, prin rețeaua de benzinării din județul
                    Alba și stațiile mobile de distribuție.
                  </p>
                  <p>
                    Complementar, exploatăm cariera de piatră de la Zlatna, producând
                    cribluri și spărturi de piatră pentru construcții și infrastructură.
                    De asemenea, executăm lucrări de construcție drumuri și furnizăm
                    piatră cubică pentru pavaje și amenajări.
                  </p>
                  <p>
                    Suntem o firmă de avangardă, scopul nostru fiind satisfacerea
                    cerințelor clienților pentru a evolua spre succes împreună.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-soft border border-black/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-7xl font-extrabold text-brand-navy/10">1999</p>
                  <p className="mt-2 text-ink-muted/50 text-sm font-medium">
                    Anul înființării
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-brand-red font-semibold text-xs tracking-widest uppercase">
                Valori
              </span>
              <h2 className="heading-lg mt-2">Ce ne Definește</h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <FadeInSection key={v.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-xl bg-surface border border-black/5">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                    <v.icon size={24} className="text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                    <p className="mt-1.5 text-ink-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-brand-red font-semibold text-xs tracking-widest uppercase">
                Cronologie
              </span>
              <h2 className="heading-lg mt-2">Evoluția Noastră</h2>
            </div>
          </FadeInSection>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-black/5 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((m, i) => (
                <FadeInSection key={m.label} delay={i * 0.05}>
                  <div
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      i % 2 === 0
                        ? 'md:flex-row md:text-right'
                        : 'md:flex-row-reverse md:text-left'
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="p-5 rounded-xl bg-gradient-soft border border-black/5">
                        <span className="text-brand-navy font-extrabold text-lg">{m.year}</span>
                        <p className="text-ink-muted text-sm mt-1">{m.label}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-surface border-2 border-brand-navy/20 shrink-0 z-10">
                      <div className="w-3 h-3 rounded-full bg-brand-navy" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <CheckCircle size={40} className="text-brand-gold mx-auto mb-4" />
            <h2 className="heading-md text-balance">
              Partenerul Pe Care Vă Puteți Baza
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Fiecare proiect este o nouă șansă de a demonstra că
              seriozitatea și calitatea nu sunt doar cuvinte.
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
