import { motion } from "framer-motion";

const experiences = [
 
  
  {
    title: "IT Teacher Intern",
    company: "Private School AL OUMRANE",
    period: "2024",
    logo: "/oumrane.png",
    place: "Sidi Maarouf",
    description:
      "Taught programming fundamentals to middle school students.",
  },
  {
    title: "Frontend Development Intern",
    company: "Global Sigma Service",
    period: "June 2023",
    logo: "/sigma.png",
    place: "Sidi Maarouf",
    description:
      "Designed and developed a corporate showcase website presenting the company’s services..",
  },
   {
    title: "Frontend Development Intern",
    company: "Learning Tech",
    period: "June 2022",
    logo: "/learningtech.png", 
    place: "CasaNearShore",
    description:
      "Created and integrated various application pages (home, courses, contact, etc.)",
  },

];

export const Experience = () => {
  return (
    <section id="experiences" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-primary/20 transition"
            >
              
              <div className="w-40 h-40 mb-3 mx-auto rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="object-contain w-40 h-40"
                />
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-primary font-medium mt-1">
                {item.company}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {item.period}
              </p>

              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
