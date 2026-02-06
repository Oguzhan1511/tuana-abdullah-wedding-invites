import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-script text-4xl md:text-5xl text-seal mb-4">
          Tuana & Abdullah
        </p>
        <p className="text-muted-foreground font-body flex items-center justify-center gap-2">
          <span>19 Haziran 2026</span>
          <Heart className="w-4 h-4 fill-seal text-seal" />
          <span>İstanbul</span>
        </p>
        
        <div className="decorative-line w-24 mx-auto mt-8 mb-6" />
        
        <p className="text-sm text-muted-foreground/60 font-body">
          Sevgiyle hazırlandı
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
