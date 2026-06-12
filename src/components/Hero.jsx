import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Truck, Fuel } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const statCards = [
  { icon: Shield, label: 'Ani de Experiență', value: '25+' },
  { icon: Truck, label: 'Proiecte Finalizate', value: '500+' },
  { icon: Fuel, label: 'Benzinării Operate', value: '10+' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] md:min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <motion.div
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-[15%] w-96 h-96 rounded-full bg-brand-red/5 blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '-2s' }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center pt-32 md:pt-40 pb-20 md:pb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Partener de încredere din 1999
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.h1 variants={itemVariants} className="heading-xl text-white text-balance">
                Infrastructură,{' '}
                <span className="text-brand-gold">Construcții</span>
                <br />
                și Carburanți pentru{' '}
                <span className="text-brand-gold">România</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
              >
                De peste două decenii, Europexpres oferă soluții integrate
                în construcția drumurilor, exploatarea carierei de piatră
                și distribuția de carburanți — cu aceeași seriozitate și
                profesionalism.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/servicii" className="btn-primary text-base px-8 py-3.5">
                  Descoperă Serviciile Noastre
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline-light text-base px-8 py-3.5">
                  Contactează-ne
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-2xl"
            >
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <stat.icon size={20} className="text-brand-gold shrink-0" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
