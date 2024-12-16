import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingCardProps {
  text: string
  isVisible: boolean
}

export default function LoadingCard({ text, isVisible }: LoadingCardProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center max-w-sm w-full"
          >
            <motion.div
              key={text}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 whitespace-nowrap">{text}</h3>
            </motion.div>
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

