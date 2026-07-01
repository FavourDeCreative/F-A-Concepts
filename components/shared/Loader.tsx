"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   const hasSeenLoader = sessionStorage.getItem("fac-loader-shown");

   if (hasSeenLoader) {
     setLoading(false);
     return;
   }

   sessionStorage.setItem("fac-loader-shown", "true");

   const timer = setTimeout(() => {
     setLoading(false);
   }, 1800);

   return () => clearTimeout(timer);
 }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center px-6 text-center">
              {/* Logo */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <Image
                  src="/logo1.png"
                  alt="Favouritech Auto Concepts"
                  width={140}
                  height={140}
                  priority
                />
              </motion.div>

              {/* Company Name */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="mt-6 text-3xl font-bold text-white md:text-4xl"
              >
                Favouritech Auto Concepts
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.8,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="mt-4 max-w-md text-sm leading-7 text-white/80 md:text-base"
              >
                Where your vehicle receives the care it deserves.
              </motion.p>

              {/* Loading Bar */}
              <div className="mt-10 h-[3px] w-64 overflow-hidden rounded-full bg-white/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-red-600"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
