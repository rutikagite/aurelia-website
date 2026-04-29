"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Check localStorage for today's date
    const today = new Date().toISOString().split("T")[0];
    const lastVisit = localStorage.getItem("aurelia_last_visit");

    if (lastVisit === today) {
      document.documentElement.classList.add("ready");
      setLoading(false);
      return;
    }

    // Run loader sequence
    localStorage.setItem("aurelia_last_visit", today);

    const s1 = setTimeout(() => setStep(1), 700); // Show wordmark
    const s2 = setTimeout(() => {
      document.documentElement.classList.add("ready");
      setLoading(false);
    }, 1400); // Hide loader and set ready

    return () => {
      clearTimeout(s1);
      clearTimeout(s2);
    };
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-3xl shadow-xl"
          >
            AI
          </motion.div>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-heading font-bold tracking-tight text-slate-900"
            >
              Aurelia Innovatives
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
