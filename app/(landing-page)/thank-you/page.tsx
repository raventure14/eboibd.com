"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Download } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="h-auto pt-20 md:pt-0 min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-8"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <CheckCircle className="w-16 h-1/6 md:w-24 md:h-24 text-green-500" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-4"
        >
          <h1 className="text-xl md:text-4xl font-bold text-gray-900">Thank You for Your Purchase!</h1>
          <p className="text-lg md:text-xl text-gray-600">Your e-book order has been successfully processed.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-primary/5 rounded-xl p-6 space-y-4"
        >
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-primary" />
            <p className="text-gray-700">Check your email within the next <span className="font-semibold">12 hours</span></p>
          </div>
          <div className="flex items-center space-x-3">
            <Download className="w-6 h-6 text-primary" />
            <p className="text-gray-700">You&apos;ll receive a PDF download link</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-500"
        >
          <p>Having trouble? Contact our support team at hello.eboibd@gmail.com</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            onClick={() => window.location.href = '/'}
          >
            Return to Homepage
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
}