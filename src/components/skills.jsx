import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../LIB/utils";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJira,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS", icon: <SiCss3 />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "React", icon: <SiReact />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Bootstrap", icon: <SiBootstrap />, category: "frontend" },

  { name: "PHP", icon: <SiPhp />, category: "backend" },
  { name: "Laravel", icon: <SiLaravel />, category: "backend" },
  { name: "MySQL", icon: <SiMysql />, category: "backend" },

  { name: "Git", icon: <SiGit />, category: "tools" },
  { name: "GitHub", icon: <SiGithub />, category: "tools" },
  { name: "Docker", icon: <SiDocker />, category: "tools" },
  { name: "Postman", icon: <SiPostman />, category: "tools" },
  { name: "Figma", icon: <SiFigma />, category: "tools" },
  { name: "Jira", icon: <SiJira />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-card p-6 rounded-xl shadow-md flex flex-col items-center justify-center gap-3 hover:shadow-primary/20 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              
              {/* Icon */}
              <div className="text-4xl text-primary">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="font-semibold text-sm text-center">
                {skill.name}
              </h3>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};