import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaxSeal from "@/components/WaxSeal";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import CoupleSection from "@/components/CoupleSection";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  // Set wedding date - June 15, 2025
  const weddingDate = new Date("2025-06-15T18:30:00");
  const handleSealClick = () => {
    setIsEnvelopeOpen(true);
  };
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen ?
      // Envelope Screen
      <motion.div key="envelope" className="min-h-screen flex flex-col items-center justify-center px-4" exit={{
        opacity: 0
      }} transition={{
        duration: 0.5
      }}>
            {/* Decorative envelope lines */}
            <motion.div className="absolute inset-0 pointer-events-none overflow-hidden" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5
        }}>
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.line x1="0" y1="50" x2="45" y2="50" className="envelope-line" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 1,
              delay: 0.8
            }} />
                <motion.line x1="55" y1="50" x2="100" y2="50" className="envelope-line" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 1,
              delay: 0.8
            }} />
              </svg>
            </motion.div>

            {/* Top text */}
            <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }}>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.3em] mb-2">
                Düğüne Davetlisiniz
              </p>
              <h1 className="font-script text-5xl md:text-7xl text-seal">
                Tuana & Abdullah
              </h1>
            </motion.div>

            {/* Wax Seal */}
            <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }}>
              <WaxSeal onClick={handleSealClick} isOpen={isEnvelopeOpen} />
            </motion.div>

            {/* Invitation text */}
            <motion.p className="mt-16 text-center font-body text-muted-foreground italic" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1
        }}>
              Bu davetiye sadece size özel hazırlandı
            </motion.p>
          </motion.div> :
      // Content Screen
      <motion.div key="content" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }}>
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
              <motion.div className="text-center" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
                <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4">
                  Evleniyoruz
                </p>
                
                <h1 className="font-script text-6xl md:text-8xl text-seal mb-6">
                  Tuana & Abdullah
                </h1>
                
                <p className="font-serif text-xl md:text-2xl text-foreground/80 mb-2">19 Haziran 2026</p>
                <p className="font-body text-muted-foreground">
                  İstanbul, Türkiye
                </p>
                
                <div className="decorative-line w-48 mx-auto my-12" />
                
                {/* Countdown */}
                <Countdown targetDate={weddingDate} />
              </motion.div>

              {/* Scroll indicator */}
              <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.5
          }}>
                <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
              </motion.div>
            </section>

            {/* Couple Section */}
            <CoupleSection />

            {/* Event Details */}
            <EventDetails />

            {/* Location */}
            <LocationSection />

            {/* Footer */}
            <Footer />
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default Index;