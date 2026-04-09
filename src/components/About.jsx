import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
            Specialize in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
          Beyond coding, I'm a continuous learner who stays updated with the latest industry trends and technologies. I thrive in collaborative environments and enjoy working on projects that challenge me to grow as a developer. My goal is to create software that not only meets requirements but exceeds expectations in functionality and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Chaimaa-Afkir(Francais).pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Full-Stack Web Development",
                desc: "Building scalable web applications using Laravel, React, and modern web technologies.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                desc: "Designing intuitive user interfaces and seamless user experiences.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Leading projects from conception to completion with agile methodologies.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className="gradient-border p-6 card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={cardVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
