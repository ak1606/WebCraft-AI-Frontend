"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useState, useEffect } from 'react'
import { PageLoader } from './PageLoader'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: 'blur(10px)',
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 1.05,
    filter: 'blur(8px)',
  },
}

const pageTransition = {
  type: 'tween' as const,
  ease: [0.22, 1, 0.36, 1] as const,
  duration: 0.8,
}

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  // Initial load effect
  useEffect(() => {
    // Show loader on initial mount or route change
    if (pathname === '/') {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2500) // Show loader for 2.5 seconds on landing page
      return () => clearTimeout(timer)
    } else if (pathname.includes('webcraft')) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1800) // Show loader for 1.8 seconds on webcraft page
      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [pathname])

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <PageLoader 
        isVisible={isLoading} 
        onComplete={handleLoaderComplete}
      />
      
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ willChange: 'transform, opacity, filter' }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AnimationProvider
