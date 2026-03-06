import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../LIB/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experiences", href: "#experiences" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const navContainer = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenu = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className={cn(
        " top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="mx-auto grid grid-cols-3 px-4 container">
        <a href="#hero" className="text-xl font-bold tracking-wide">
          <span className="text-foreground">Chaimaa</span>{" "}
          <span className="text-primary">Portfolio</span>
        </a>

        <motion.div
          className="hidden md:flex justify-center space-x-8 ml-32"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={navItem}
              className="relative text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.a>
          ))}
        </motion.div>

       
        <motion.button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 justify-self-end"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/90 backdrop-blur-xl flex flex-col items-center justify-center space-y-10 text-xl md:hidden"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  className="text-foreground/80 hover:text-primary"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
