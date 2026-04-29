"use client";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        background: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 40%, #3b82f6 100%)",
      }}
    />
  );
}