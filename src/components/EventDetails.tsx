import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Tarih",
      info: "19 Haziran 2026",
      subtitle: "Cuma",
    },
    {
      icon: Clock,
      title: "Saat",
      info: "19:00",
      subtitle: "Tören Başlangıcı",
    },
    {
      icon: MapPin,
      title: "Konum",
      info: "Mira Wedding",
      subtitle: "Avcılar, İstanbul",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Günün Detayları
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Sizi aramızda görmekten mutluluk duyacağız
          </p>
          <div className="decorative-line w-32 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="glass-card rounded-2xl p-6 md:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <detail.icon className="w-6 h-6 text-seal" />
              </div>
              <h3 className="font-serif text-lg text-muted-foreground mb-2">
                {detail.title}
              </h3>
              <p className="font-serif text-2xl md:text-3xl text-foreground mb-1">
                {detail.info}
              </p>
              <p className="text-muted-foreground font-body">
                {detail.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
