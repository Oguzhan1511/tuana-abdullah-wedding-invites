import { motion } from "framer-motion";
import waxSealImage from "@/assets/wax-seal.png";

interface WaxSealProps {
  onClick: () => void;
  isOpen: boolean;
}

const WaxSeal = ({ onClick, isOpen }: WaxSealProps) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isOpen ? { scale: 0, rotate: 180, opacity: 0 } : { scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img
        src={waxSealImage}
        alt="Mühür"
        className="w-32 h-32 md:w-40 md:h-40 seal-shadow"
        animate={!isOpen ? { 
          boxShadow: [
            "0 0 20px hsl(350 65% 30% / 0.3)",
            "0 0 40px hsl(350 65% 30% / 0.5)",
            "0 0 20px hsl(350 65% 30% / 0.3)"
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {!isOpen && (
        <motion.p
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground font-body whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Açmak için dokunun
        </motion.p>
      )}
    </motion.div>
  );
};

export default WaxSeal;
