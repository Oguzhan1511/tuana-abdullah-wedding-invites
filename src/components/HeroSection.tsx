import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tuana & Abdullah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.p
          className="font-body text-primary-foreground/80 text-sm uppercase tracking-[0.4em] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Evleniyoruz
        </motion.p>

        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-4 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tuana & Abdullah
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="w-12 h-px bg-primary-foreground/50" />
          <p className="font-serif text-lg md:text-xl text-primary-foreground/90 tracking-wider">
            19 Haziran 2026
          </p>
          <span className="w-12 h-px bg-primary-foreground/50" />
        </motion.div>

        <motion.p
          className="font-body text-primary-foreground/70 mt-2 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Mira Wedding • Avcılar, İstanbul
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
