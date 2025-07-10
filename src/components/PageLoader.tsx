"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

interface PageLoaderProps {
  isVisible: boolean
  onComplete: () => void
}

export function PageLoader({ isVisible, onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 200)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isVisible, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-300 shadow-lg">
                  <Zap className="h-10 w-10 text-slate-700" />
                </div>
              </div>
            </motion.div>
            
            <div className="text-center space-y-3">
              <motion.h2
                className="text-3xl font-bold text-slate-900"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                WebCraft AI
              </motion.h2>
              <motion.p
                className="text-slate-600 text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Initializing AI Website Builder...
              </motion.p>
            </div>

            <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
              <motion.div
                className="h-full bg-slate-700 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            <motion.div
              className="text-sm text-slate-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {progress < 20 && "🚀 Loading AI components..."}
              {progress >= 20 && progress < 40 && "⚡ Setting up workspace..."}
              {progress >= 40 && progress < 60 && "🎨 Preparing design system..."}
              {progress >= 60 && progress < 80 && "🔧 Configuring tools..."}
              {progress >= 80 && progress < 95 && "✨ Finalizing interface..."}
              {progress >= 95 && "🎯 Almost ready..."}
            </motion.div>

            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-slate-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
