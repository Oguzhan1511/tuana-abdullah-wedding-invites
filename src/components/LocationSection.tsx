import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const handleOpenMaps = () => {
    window.open(
      "https://maps.google.com/?q=Mira+Wedding+Avcılar+İstanbul",
      "_blank"
    );
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Konum
          </h2>
          <div className="decorative-line w-32 mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Map placeholder with gradient */}
          <div className="h-64 md:h-80 bg-gradient-to-br from-blush via-cream to-accent relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-16 h-16 rounded-full bg-seal flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="font-serif text-lg text-foreground">Mira Wedding</p>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <svg className="absolute bottom-0 left-0 w-full h-16 opacity-30" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path d="M0,100 C300,60 600,80 900,40 C1050,20 1150,60 1200,50 L1200,100 Z" fill="hsl(var(--rose) / 0.3)" />
            </svg>
          </div>

          <div className="p-6 md:p-8 text-center">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Mira Wedding
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Avcılar, İstanbul • Türkiye
            </p>
            
            <Button
              onClick={handleOpenMaps}
              className="bg-seal hover:bg-seal/90 text-primary-foreground font-body text-base px-8 py-6 rounded-full"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Haritada Aç
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
