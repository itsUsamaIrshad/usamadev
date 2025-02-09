"use client"; // 👈 This makes it a client component

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname(); // ✅ Now it will work

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
       
      >
        {children}
      </div>
    </AnimatePresence>
  );
}
