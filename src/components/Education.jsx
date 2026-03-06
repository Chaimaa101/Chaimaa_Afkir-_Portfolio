import { motion } from "framer-motion";

const education = [
  {
    degree: "Full-Stack Web Development Bootcamp",
    school: "Simplon maghreb",
    period: "July 2025 –January 2026",
    logo: "/simplon.png",
  },
  {
    degree: "Bachelor’s Degree – Business Intelligence Systems",
    school: "Faculty of Sciences Ain Choc",
    period: "October 2023 – July 2024",
    logo: "/fsac.png",
  },
  {
    degree: "BTS – Information Systems Development",
    school: "Centre Lycée Al Kendi",
    period: "August 2021 – July 2023",
    logo: "/alkendi.png",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-primary/20 transition text-center"
            >
  
              <div className="w-40 h-40 mx-auto mb-6 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.school}
                  className="object-contain w-40 h-40"
                />
              </div>

              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="text-primary font-medium mt-2">
                {item.school}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {item.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
