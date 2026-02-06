import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Send } from "lucide-react";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-cream">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.3em] mb-3">
            Katılım
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Özel günümüzde sizi aramızda görmek isteriz
          </p>
          <div className="decorative-line w-32 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Adınız Soyadınız
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="İsminizi yazınız"
                  className="bg-background border-rose/30 font-body text-base py-6 rounded-xl focus:border-seal focus:ring-seal"
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Kişi Sayısı
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-background border border-rose/30 font-body text-base py-3 px-4 rounded-xl focus:border-seal focus:ring-seal focus:outline-none"
                >
                  <option value="1">1 Kişi</option>
                  <option value="2">2 Kişi</option>
                  <option value="3">3 Kişi</option>
                  <option value="4">4 Kişi</option>
                  <option value="5">5+ Kişi</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-seal hover:bg-seal/90 text-primary-foreground font-body text-base py-6 rounded-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Katılımı Onayla
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-seal/10 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-seal" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Teşekkür ederiz!
              </h3>
              <p className="text-muted-foreground font-body text-lg">
                Katılımınızı sabırsızlıkla bekliyoruz, {name}.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
