"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";

export function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(true);
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setIsLoading(true);
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-bg-primary"
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 2, ease: "linear", repeat: Infinity },
          scale: { duration: 1, ease: "easeInOut", repeat: Infinity }
        }}
        className="flex items-center justify-center"
      >
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary opacity-80"
        >
          <path d="M12.4 2.1C18 2.1 22.5 6.6 22.5 12.2C22.5 17.8 18 22.3 12.4 22.3C10.7 22.3 9.1 21.9 7.7 21.1C11.5 20.3 14.4 16.9 14.4 12.8C14.4 8.7 11.5 5.3 7.7 4.5C9.1 3.7 10.7 3.3 12.4 2.1Z" fill="currentColor"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}
