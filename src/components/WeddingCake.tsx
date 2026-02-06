import { motion } from "framer-motion";

const WeddingCake = () => {
  return (
    <motion.div
      className="flex justify-center items-center py-4"
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ perspective: 800 }}
    >
      <svg
        width="280"
        height="400"
        viewBox="0 0 280 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 h-auto md:w-72 lg:w-80"
      >
        {/* Base plate */}
        <ellipse cx="140" cy="385" rx="130" ry="15" stroke="hsl(var(--seal))" strokeWidth="1.5" fill="none" />
        <path d="M10 385 Q140 370 270 385" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />

        {/* Bottom tier - scalloped edge */}
        <rect x="35" y="310" width="210" height="75" rx="4" stroke="hsl(var(--seal))" strokeWidth="1.5" fill="none" />
        {/* Bottom tier scallops */}
        <path d="M35 385 Q55 370 75 385 Q95 370 115 385 Q135 370 155 385 Q175 370 195 385 Q215 370 235 385 Q245 375 245 385" stroke="hsl(var(--seal))" strokeWidth="1.2" fill="none" />
        {/* Bottom tier decorative swags */}
        <path d="M45 340 Q70 355 95 340" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M95 340 Q120 355 145 340" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M145 340 Q170 355 195 340" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M195 340 Q220 355 245 340" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        {/* Bottom tier bows */}
        <path d="M93 338 Q88 330 83 338 M93 338 Q98 330 103 338 M93 342 L93 355" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M193 338 Q188 330 183 338 M193 338 Q198 330 203 338 M193 342 L193 355" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />

        {/* Middle tier */}
        <rect x="60" y="220" width="160" height="90" rx="4" stroke="hsl(var(--seal))" strokeWidth="1.5" fill="none" />
        {/* Middle tier scallops */}
        <path d="M60 310 Q80 295 100 310 Q120 295 140 310 Q160 295 180 310 Q200 295 220 310" stroke="hsl(var(--seal))" strokeWidth="1.2" fill="none" />
        {/* Middle tier decorative swags */}
        <path d="M70 255 Q95 270 120 255" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M120 255 Q145 270 170 255" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M170 255 Q195 270 220 255" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        {/* Middle tier bows */}
        <path d="M118 253 Q113 245 108 253 M118 253 Q123 245 128 253 M118 257 L118 268" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M168 253 Q163 245 158 253 M168 253 Q173 245 178 253 M168 257 L168 268" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />

        {/* Top tier */}
        <rect x="85" y="145" width="110" height="75" rx="4" stroke="hsl(var(--seal))" strokeWidth="1.5" fill="none" />
        {/* Top tier scallops */}
        <path d="M85 220 Q105 208 125 220 Q145 208 165 220 Q185 208 195 220" stroke="hsl(var(--seal))" strokeWidth="1.2" fill="none" />
        {/* Top tier swags */}
        <path d="M95 175 Q115 188 135 175" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        <path d="M135 175 Q155 188 175 175" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        {/* Top tier bow */}
        <path d="M133 173 Q128 165 123 173 M133 173 Q138 165 143 173 M133 177 L133 186" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />

        {/* Couple topper - Groom */}
        {/* Groom body */}
        <line x1="125" y1="145" x2="125" y2="100" stroke="hsl(var(--seal))" strokeWidth="1.5" />
        {/* Groom head */}
        <circle cx="125" cy="90" r="8" stroke="hsl(var(--seal))" strokeWidth="1.5" fill="none" />
        {/* Groom arm reaching to bride */}
        <path d="M125 110 Q135 105 140 108" stroke="hsl(var(--seal))" strokeWidth="1.2" fill="none" />
        {/* Groom legs */}
        <line x1="125" y1="145" x2="118" y2="148" stroke="hsl(var(--seal))" strokeWidth="1.2" />
        <line x1="125" y1="145" x2="130" y2="148" stroke="hsl(var(--seal))" strokeWidth="1.2" />
        {/* Groom jacket */}
        <path d="M120 105 L125 100 L130 105 L130 125 L120 125 Z" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />

        {/* Couple topper - Bride */}
        {/* Bride body */}
        <line x1="155" y1="145" x2="155" y2="105" stroke="hsl(var(--seal))" strokeWidth="1.5" />
        {/* Bride head */}
        <circle cx="155" cy="93" r="8" stroke="hsl(var(--seal))" strokeWidth="1.5" fill="none" />
        {/* Bride hair/veil */}
        <path d="M150 86 Q155 80 160 86" stroke="hsl(var(--seal))" strokeWidth="1" fill="none" />
        {/* Bride dress - flowing */}
        <path d="M155 110 Q140 130 130 148 L155 145 L180 148 Q170 130 155 110" stroke="hsl(var(--seal))" strokeWidth="1.2" fill="none" />
        {/* Bride arm */}
        <path d="M155 110 Q145 107 140 108" stroke="hsl(var(--seal))" strokeWidth="1.2" fill="none" />
        {/* Bride veil flowing */}
        <path d="M160 88 Q175 95 170 120" stroke="hsl(var(--seal))" strokeWidth="0.8" fill="none" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default WeddingCake;
