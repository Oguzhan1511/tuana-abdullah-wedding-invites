import { motion } from "framer-motion";
import coupleImage from "@/assets/couple-illustration.png";

const CoupleSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.img
            src={coupleImage}
            alt="Tuana & Abdullah"
            className="w-64 md:w-80 mx-auto mb-8 opacity-80"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            "Birlikte atacağımız her adım, paylaşacağımız her an 
            hayatımızın en güzel hikayesini yazacak..."
          </motion.p>
          
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="w-16 h-px bg-rose" />
            <span className="text-seal text-2xl">♥</span>
            <span className="w-16 h-px bg-rose" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
