'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div 
      className="border border-gray-200 rounded-lg overflow-hidden"
      initial={{opacity:0, y:50}}
      whileInView={{ backgroundColor: isOpen ? "#f3f4f6" : "#ffffff",opacity:1, y:0 }}
      transition={{ duration: 0.3, ease:"linear" }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={onToggle}
      >
        <span className=" text-xl font-semibold text-heading">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-4 text-para">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

