import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "EasyRent ",
    description: "Complete Car Rental Platform with Real-time Management & Payment Processing",
    image: "/placeholder.png",
    tags: ["React",  "Laravel","Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/Chaimaa101/Projet-Fil-Rouge-EasyRent.git",
  },
  {
    id: 2,
    title: "OPTISTORE",
    description:
      "Sleek and modern eCommerce platform designed for selling high-quality eyewear.",
    image: "/placeholder.png",
    tags: ["Laravel", "ReactJs", "InertiaJs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Chaimaa101/OPTISTORE.git",
  },
  {
    id: 3,
    title: "Podcast-Finder ",
    description:
      "Platform that allowing users to search, listen and discover podcasts according to their interests.",
    image: "/placeholder.png",
    tags: ["Laravel", "API", "Axios"],
    demoUrl: "#",
    githubUrl: "https://github.com/Chaimaa101/Podcast_Finder.git",
  }, {
    id: 4,
    title: "Timyo",
    description:
      "Book appointments, and for administrators to manage all appointments.",
    image: "/placeholder.png",
    tags: ["React.js", "Laravel", "SPA Auth"],
    demoUrl: "#",
    githubUrl: "https://github.com/Chaimaa101/Timyo.git",
  }, {
    id: 5,
    title: "Invoicify ",
    description:
      "Intuitive invoice management system that helps users easily manage their invoices.",
    image: "/placeholder.png",
    tags: ["Laravel", "React.js", "InertiaJs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Chaimaa101/Invoicify.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 "
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Chaimaa101"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Check My GitHub <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
