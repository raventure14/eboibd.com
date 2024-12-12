"use client";
import { motion } from "framer-motion"
import Link from "next/link"
import { Book, Gift, Library } from 'lucide-react'
import { cn } from "@/lib/utils"

import useNavigation from "@/store/navigation";
const menuItems = [
  {
    name: "About Book",
    href: "#about-book",
    icon: Book,
  },
  {
    name: "Benefits",
    href: "#benefits", 
    icon: Gift,
  },
  {
    name: "E-books",
    href: "#",
    icon: Library,
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

const MobileNav = () => {
  const { isOpen, setIsOpen } = useNavigation();

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`${
        isOpen ? "flex justify-start items-start" : "hidden"
      }  fixed bottom-0 left-0 bg-white bg-opacity-40  z-50 h-[calc(100vh-6rem)] md:h-[calc(100vh-5.5rem)] w-screen`}
    >
      <motion.nav
        initial="hidden"
        animate="show"
        variants={container}
        className="w-full mx-auto bg-white rounded-lg shadow-lg py-6 space-y-2"
      >
        {menuItems.map((menuItem, index) => (
          <motion.div
            key={menuItem.name}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={menuItem.href}
              className={cn(
                "flex items-center gap-3 p-3 rounded-md text-slate-700 hover:text-slate-900",
                "hover:bg-slate-50 transition-colors duration-200",
                "group relative overflow-hidden"
              )}
               onClick={() => setIsOpen()}
            >
              <motion.div
                initial={false}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.2 
                }}
              >
                <menuItem.icon className="w-5 h-5 text-slate-500 group-hover:text-slate-700" />
              </motion.div>
              <span className="font-medium">{menuItem.name}</span>
              <motion.div
                className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-10 -z-10"
                initial={false}
                whileHover={{
                  opacity: 0.1,
                  transition: { duration: 0.3 }
                }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default MobileNav;
