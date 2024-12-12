"use client"
import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show button when user scrolls down 100px
      setIsVisible(scrollTop > 100);
      
      // Check if user is near bottom of page
      setIsAtBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = (position: 'top' | 'bottom') => {
    window.scrollTo({
      top: position === 'top' ? 0 : document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={() => scrollToPosition(isAtBottom ? 'top' : 'bottom')}
      className="fixed right-6 bottom-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
      aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to bottom'}
    >
      {isAtBottom ? (
        <ChevronUp className="h-6 w-6" />
      ) : (
        <ChevronDown className="h-6 w-6" />
      )}
    </button>
  );
}