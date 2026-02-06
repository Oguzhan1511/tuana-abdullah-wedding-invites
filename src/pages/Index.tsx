import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaxSeal from "@/components/WaxSeal";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import CoupleSection from "@/components/CoupleSection";
import WeddingCake from "@/components/WeddingCake";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const weddingDate = new Date("2026-06-19T19:00:00");

  const handleSealClick = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen ? (
          <motion.div
            key="envelope"
            className="min-h-screen flex flex-col items-center justify-center px-4"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.line x1="0" y1="50" x2="45" y2="50" className="envelope-line"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }} />
                <motion.line x1="55" y1="50" x2="100" y2="50" className="envelope-line"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }} />
              </svg>
            </motion.div>

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.3em] mb-2">
                Düğüne Davetlisiniz
              </p>
              <h1 className="font-script text-5xl md:text-7xl text-seal">
                Tuana & Abdullah
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <WaxSeal onClick={handleSealClick} isOpen={isEnvelopeOpen} />
            </motion.div>

            <motion.p
              className="mt-16 text-center font-body text-muted-foreground italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Bu davetiye sadece size özel hazırlandı
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Hero Section with Cake */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4">
                  Evleniyoruz
                </p>

                <h1 className="font-script text-6xl md:text-8xl text-seal mb-4">
                  Tuana & Abdullah
                </h1>

                <p className="font-serif text-lg md:text-xl text-foreground/70 uppercase tracking-[0.2em] mb-8">
                  19 Haziran 2026
                </p>

                {/* Animated rotating wedding cake */}
                <WeddingCake />
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
              </motion.div>
            </section>

            {/* Countdown */}
            <section className="py-16 md:py-20 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.3em] mb-3">
                  Geri Sayım
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                  Büyük Güne Kalan Süre
                </h2>
                <Countdown targetDate={weddingDate} />
              </motion.div>
            </section>

            <CoupleSection />
            <EventDetails />
            <LocationSection />
            <RSVPSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
